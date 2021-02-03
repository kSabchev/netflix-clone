import axios from "./Axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() =>{
        async function fetchData() {
            const request = await axios.get()
        }
    })

  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  }
  return (
    // https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://i.imgur.com/e1hLQ2m.png')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner__description"> {truncate(`this is a test description`, 150)}</h1>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
