import React from "react";
import "./styles.scss";
import { GiPositionMarker } from "react-icons/gi";
const Location = ({ list = ["Bangalore"] }) => {
  return (
    <div className="location">
      <GiPositionMarker className="icon" />
      <select>
        {list.map((item, index) => (
          <option key={index} value={item}>
            {" "}
            {item}{" "}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Location;
