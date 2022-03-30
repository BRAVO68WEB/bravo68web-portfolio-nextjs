import React, { useEffect, useState } from "react";
import { DicordActivityStyle } from "./discord-activity.style";
import { useLanyard } from "react-use-lanyard";

/* <pre>{!loading && JSON.stringify(status, null, 4)}</pre>; */

export default function DiscordActivity() {
  const [time, setTime] = useState("00:00:00 elapsed");
  const padTo2Digits = (num) => {
    return num.toString().padStart(2, "0");
  };
  const convertMsToHM = (milliseconds) => {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    seconds = seconds % 60;
    minutes = seconds >= 30 ? minutes + 1 : minutes;
    minutes = minutes % 60;
    hours = hours % 24;
    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
      seconds
    )} elapsed`;
  };
  const baseURL = "https://cdn.discordapp.com/app-assets/";
  const { loading, status /*, websocket */ } = useLanyard({
    userId: "457039372009865226",
    socket: true,
  });
  const [currentTs, setCurrentTs] = useState(Date.now());
  useEffect(() => {
    let interval = setInterval(() => {
      if (!loading) {
        setCurrentTs(Date.now());
        let timeElapsed = convertMsToHM(
          currentTs - new Date(status.activities[1]?.timestamps.start)
        );
        console.log(timeElapsed);
        setTime(timeElapsed);
      }
      console.log("Intervcal");
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [currentTs, loading]);
  console.log(loading);
  return (
    <DicordActivityStyle>
      {!loading && (
        <>
          <div className="discord-icons">
            <div className="discord-large-icon">
              {status.activities[1] && (
                <img
                  src={
                    baseURL +
                    status.activities[1].application_id +
                    "/" +
                    status.activities[1].assets.large_image +
                    ".png"
                  }
                />
              )}
            </div>
            <div className="discord-small-icon">
              {status.activities[1] && (
                <img
                  src={
                    baseURL +
                    status.activities[1].application_id +
                    "/" +
                    status.activities[1].assets.small_image +
                    ".png"
                  }
                />
              )}
            </div>
          </div>
          <div className="discord-messageBox">
            <div className="discord-message-application">
              <b>{status.activities[1] && status.activities[1].name}</b>
            </div>
            <div className="discord-message-activity">
              {status.activities[1] && status.activities[1].details}
            </div>
            <div className="discord-message-files">
              {status.activities[1] && status.activities[1].state
                ? status.activities[1].state
                : null}
            </div>
            <div className="time-elapsed"> {status.activities[1] && time} </div>
          </div>
        </>
      )}
    </DicordActivityStyle>
  );
}
