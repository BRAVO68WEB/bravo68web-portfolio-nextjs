import {useEffect,useState} from "react"
import axios from "../handlers/axios"

const parseSong = (
    body,
    imageSize,
  ) => {
    if (!body) {
      return {
        status: 'connecting',
        song: null,
      };
    }
  
    const lastSong = body.recenttracks.track?.[0];
  
    if (!lastSong || !lastSong['@attr']?.nowplaying) {
      return {
        status: 'idle',
        song: null,
      };
    }
  
    const image = lastSong.image.find(i => {
      return i.size === imageSize;
    });
  
    return {
      status: 'playing',
      song: {
        name: lastSong.name,
        artist: lastSong.artist['#text'],
        art: image?.['#text'] ?? lastSong.image[0]['#text'],
        url: lastSong.url,
        album: lastSong.album['#text'],
      },
    };
  }
  

const useLastFM = () =>{
    const [status,setStatus] = useState("idle")
    const [song,setSong] = useState();

    const getStatus = async () =>{

        axios.get("/me/lastfm/current").then((res)=>{
           const {status, song}=
                parseSong(res.data, "extralarge")
            setSong(song)
            setStatus(status)
        })
    }
    
    useEffect(()=>{

        const interval = setInterval(()=>{
            getStatus()
        }, 3000)

        return () => clearInterval(interval)

    },[])

    return {status,song}
}

export default useLastFM