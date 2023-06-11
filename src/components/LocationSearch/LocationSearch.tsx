import React, { useState } from "react";
import "./LocationSearch.css";

interface Props {
  currentCity: string;
  onSearch: (city: string) => void;
}

const LocationSearch: React.FC<Props> = ({ currentCity, onSearch }) => {
  const [city, setCity] = useState(currentCity);

  const handleSearch = () => {
    onSearch(city);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return (
    <div className="location-search">
      <img
        className="location-image"
        src={require("../../Assets/location.png")}
        alt="location logo"
      />
      <input
        className="location-input"
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleInputChange}
      />
      <button className="location-button" onClick={handleSearch}>
        <img
          className="location-button-image"
          src={require("../../Assets/addLocation.png")}
          alt="add location logo"
        />
      </button>
    </div>
  );
};

export default LocationSearch;
