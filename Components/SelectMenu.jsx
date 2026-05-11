import {  useState } from "react";

export default function SelectMenu({ setQuery }) {
  const [isActive, setIsActive] = useState(false);
  const [selectedRegion , setSelectedRegion] = useState('Filter by Region')
  const handleClick = (region) => {
    setQuery(region.toLowerCase());
    setSelectedRegion(region)
    setIsActive(prev => !prev);
  };
  return (
    <div className={`dropdown ${isActive ? "active" : ""}`}>
      <div
        className="dropdown-btn"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <span id="selected">{selectedRegion}</span>
        <span className="arrow">⌄</span>
      </div>
      <div className="dropdown-content">
        <div className="item" onClick={() => handleClick("Africa")}>
          Africa
        </div>
        <div className="item" onClick={() => handleClick("Americas")}>
          Americas
        </div>
        <div className="item" onClick={() => handleClick("Asia")}>
          Asia
        </div>
        <div className="item" onClick={() => handleClick("Europe")}>
          Europe
        </div>
        <div className="item" onClick={() => handleClick("Oceania")}>
          Oceania
        </div>
      </div>
    </div>
  );
}
