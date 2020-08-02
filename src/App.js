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
    const urlReq = `https://saavn.sumit.codes/songs/${url}`;
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
    <div className="App">
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>URL</button>
      {isLoading ? (
        <div></div>
      ) : (
      <a href={downloadLink}> Download </a>
      )}
    </div>
  );
}
