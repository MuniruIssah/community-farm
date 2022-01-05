import React from "react";
import { AiTwotoneCalendar } from "react-icons/ai";
import "./styles.scss";
const Filter = ({ list = ['Filter by delivery day'] }) => {
  return (
    <div className="filter">
      <AiTwotoneCalendar className="icon" />
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

export default Filter;
