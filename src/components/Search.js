import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import CurrentWeather from "./CurrentWeather";
import "./Search.scss";
import { FaSearch } from "react-icons/fa";

function Search(props) {
  const API_KEY = "2616ade7f0d69289c6bed6ea80b29011";
  //   const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${API_KEY}`;
  const [locationInfo, setLocationInfo] = useState("");
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);

  //   const [userDetails, setUserDetails] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(
      //   `https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&appid=${API_KEY}`
      `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        //everything is good
        if (data.cod === 200) {
          console.log(data);

          setError(null);
          setLocationInfo(data);
          //not found
        } else {
          console.log(data.message);
          setError(data.message);
          setLocationInfo("");
        }
      });
  };

  //https://geolocation-db.com/
  //   const getUserGeolocation = () => {
  //     fetch(
  //       "https://geolocation-db.com/json/d802faa0-10bd-11ec-b2fe-47a0872c6708"
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data.city);

  //       });
  //   };

  const handleChange = (e) => {
    console.log(e.target.value);
    setUserInput(e.target.value);
  };

  //   const handleClick = (e) => {
  //     console.log("click works");
  //     getUserGeolocation();
  //   };
  return (
    <>
      <form
        autoComplete="off"
        className="searchbar__container"
        onSubmit={submitHandler}
      >
        <div>
          <FaSearch style={{ marginRight: "1rem", color: "#419efa" }} />
        </div>
        <div>
          <input
            id="search"
            name="search"
            placeholder="Location"
            onChange={handleChange}
            className="searchbar"
          />
        </div>
        {/* <button className="searchButton" type="submit">
          Search
        </button> */}
      </form>
      {/* <button onClick={handleClick}>Testing</button> */}
      <ErrorMessage error={error} />
      {locationInfo && <CurrentWeather data={locationInfo} />}
    </>
  );
}

export default Search;
