import React from "react";
import "./styles.scss";
import { IoIosListBox } from "react-icons/io";
const SavedList = () => {
  return (
    <button className="savedList">
      <IoIosListBox className="icon" />
      <span>View Saved List</span>
    </button>
  );
};

export default SavedList;
