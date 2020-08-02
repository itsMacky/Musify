import React from 'react'

function safeCode() {
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
    <div className="App" style={{background:"grey"}}>
      <div>
        <h1> Musify: JioSaavn Music Downloader</h1>
        <form className="form">
        <input style={{color:"black"}} type="text" name="Enter Jiosaavan URL" onChange={handleChange} required='true' class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        <button onClick={handleClick} className="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.8 px-4 rounded m-2">Submit</button>
        {isLoading ? (
          <div></div>
        ) : (
        <a href={downloadLink} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Download </a>
        )}
        </form>
      </div>
      <div>
        <form>
          <ol>
            <h3>How To DownLoad Music?</h3>
            <li>1. Go To JioSaavn.</li>
            <li>2. Search For Your Music</li>
            <li>3. Click On Share Button and Copy The Link</li>
            <li>4. Paste in White Field</li>
            <li>5. Click Submit and Wait</li>
          </ol>

        </form>
      </div>
    </div>

  );
}

export default safeCode
