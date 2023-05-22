import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

interface Props {
  currentCity: string;
  onSearch: (city: string) => void;
}

const LocationSearch: React.FC<Props> = ({ currentCity, onSearch }) => {
  const [city, setCity] = useState(currentCity);

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div className="location-icon">
      <FaMapMarkerAlt />
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default LocationSearch;
