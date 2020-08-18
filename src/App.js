import React, { useState, useEffect } from "react";

export default function App() {
  const [url, setUrl] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  // useEffect(() => {
  //   fetch(
  //     "https://saavn.sumit.codes/songs/https://www.jiosaavn.com/song/demons/Qw9edk1hY0Y"
  //   )
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data.result[0].song_title);
  //       setName(data.result[0].song_title);
  //     });
  // }, []);
  const handleChange = e => {
    setUrl(e.target.value);
  };
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = () => {
    const urlReq = `https://saavn-j5zi.onrender.com/songs/${url}`;
    setIsLoading(true);
    fetch(urlReq)
      .then(res => res.json())
      .then(data => {
        console.log(data.result[0]);
        setDownloadLink(data.result[0].download_link);
        setIsLoading(false);
      });
  };
  return (
    <div class="container">
      <input class="form-control " placeholder="Enter Share URL" type="text" onChange={handleChange} />
      <button class="btn btn-primary align-self-center mr-3" onClick={handleClick}>URL</button>
      {isLoading ? (
        <div></div>
      ) : (
        
      <a href={downloadLink}> Download </a>
      
      // <button class="btn btn-primary align-self-center mr-3" onClick={downloadLink}> Download Link</button>
      )}

      <div class="container">
        <h3>How To Use?</h3>
        <p>1. Visit JioSaavn Website</p>
        <p>2. Search Your Fav Song</p>
        <p>3. Click on Share URL</p>
        <p>4. Copy Share Song URL </p>
        <p>5. Paste it in Above Input Field and click URL button</p>
        <p>6. Wait For Minimun 10 sec and Voila! You gets the Download URL</p>
        <p>7. Enjoy</p>
      </div>
    </div>
  );
}
