import React, { useEffect, useState } from "react";
import { DicordActivityStyle } from "./discord-activity.style";
import { useLanyard } from "react-use-lanyard";
import { discord_id } from "config";

/* <pre>{!loading && JSON.stringify(status, null, 4)}</pre>; */

const customStatus = [
  "Searching for Cat Girls",
  "Watching Anime",
  "Sleeping",
  "Studying",
];
const statusPicker = () => {
  return customStatus[Math.floor(Math.random() * customStatus.length)];
};
export default function DiscordActivity() {
  const { loading, status } = useLanyard({
    userId: discord_id,
    socket: true,
  });
  const [time, setTime] = useState("00:00:00 elapsed");
  const [pickedStatus] = useState(statusPicker());
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

  const [currentTs, setCurrentTs] = useState(Date.now());
  useEffect(() => {
    let interval = setInterval(() => {
      if (!loading) {
        setCurrentTs(Date.now());
        let timeElapsed = convertMsToHM(
          currentTs - new Date(status?.activities[1]?.timestamps.start)
        );
        // console.log(timeElapsed);
        setTime(timeElapsed);
      }
      // console.log("Intervcal");
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [currentTs, loading]);
  if (
    !loading &&
    (status.discord_status === "online" ||
      status.discord_status === "idle" ||
      status.discord_status === "dnd") &&
    status.activities.length
  ) {
    if (status.activities[0].id === "custom" && status.activities.length == 1) {
      console.log(status.activities.length);
      return (
        <DicordActivityStyle>
          <div className="discord-icons">
            <div className="discord-large-icon">
              <img
                src={
                  "https://cdn.discordapp.com/avatars/" +
                  status.discord_user.id +
                  "/" +
                  status.discord_user.avatar +
                  ".png"
                }
              />
            </div>
            <div className="discord-small-icon">
              <img src={"/images/" + status?.discord_status + ".png"} alt="" />
            </div>
          </div>
          <div className="discord-messageBox">
            <div className="discord-message-application">
              <b>
                {status?.discord_user.username +
                  "#" +
                  status?.discord_user.discriminator}
              </b>
            </div>
            <div className="discord-message-activity">
              <b>is {status?.discord_status}</b>
            </div>
            <div className="discord-message-files">
              {status?.activities[0].state}
            </div>
            <br />
          </div>
        </DicordActivityStyle>
      );
    } else {
      // console.log("Hmmm Recv");
      if (status.activities[1]?.name === "Spotify") {
        return (
          <DicordActivityStyle>
            {!loading && (
              <>
                <div className="discord-icons">
                  <div className="discord-large-icon">
                    {<img src={status.spotify.album_art_url} />}
                  </div>
                  <div className="discord-small-icon">
                    {
                      <img
                        src={
                          "https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png"
                        }
                      />
                    }
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
                  <br />
                  <div className="time-elapsed">
                    {status?.activities[1]?.timestamps?.start && time}
                  </div>
                </div>
              </>
            )}
          </DicordActivityStyle>
        );
      } else {
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
                  <br />
                  <div className="time-elapsed">
                    {status?.activities[1]?.timestamps?.start && time}
                  </div>
                </div>
              </>
            )}
          </DicordActivityStyle>
        );
      }
    }
  } else if (
    !loading &&
    status.activities.length === 0 &&
    (status.discord_status === "online" ||
      status.discord_status === "idle" ||
      status.discord_status === "dnd")
  ) {
    return (
      <DicordActivityStyle>
        <div className="discord-icons">
          <div className="discord-large-icon">
            <img
              src={
                "https://cdn.discordapp.com/avatars/" +
                status.discord_user.id +
                "/" +
                status.discord_user.avatar +
                ".png"
              }
            />
          </div>
          <div className="discord-small-icon">
            <img src={"/images/" + status.discord_status + ".png"} alt="" />
          </div>
        </div>
        <div className="discord-messageBox">
          <div className="discord-message-application">
            <b>
              {status?.discord_user.username +
                "#" +
                status?.discord_user.discriminator}
            </b>
          </div>
          <div className="discord-message-activity">
            <b>is Online</b>
          </div>
          <div className="discord-message-files">
            <b>{status?.activities[0]?.state}</b>
          </div>
          <br />
          <div className="time-elapsed">{}</div>
        </div>
      </DicordActivityStyle>
    );
  } else {
    // console.log(restData);
    var restData = {
      username: "Bravo68-DF_Techs",
      public_flags: 64,
      id: "457039372009865226",
      discriminator: "6429",
      avatar: "c1ef97afea299d1d70e903870da040f6",
    };

    return (
      <DicordActivityStyle>
        <div className="discord-icons">
          <div className="discord-large-icon">
            <img
              src={
                "https://cdn.discordapp.com/avatars/" +
                restData.id +
                "/" +
                restData.avatar +
                ".png"
              }
            />
          </div>
          <div className="discord-small-icon">
            <img src={"/images/" + "offline" + ".png"} alt="" />
          </div>
        </div>
        <div className="discord-messageBox">
          <div className="discord-message-application">
            <b>{restData.username + "#" + restData.discriminator}</b>
          </div>
          <div className="discord-message-activity">
            <b>is Offline</b>
          </div>
          <br />
          <div className="discord-message-files">
            <b>{pickedStatus}</b>
          </div>
          {/* <div className="time-elapsed">00:00:00 elapsed</div> */}
        </div>
      </DicordActivityStyle>
    );
  }
}
