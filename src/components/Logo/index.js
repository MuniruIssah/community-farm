import React from "react";
import "./styles.scss";
import { GiChestnutLeaf } from "react-icons/gi";
const Logo = () => {
  return (
    <div className="cfLogo">
      <GiChestnutLeaf className='logo' />
      <span>
        COMMUNITY <br />
        <b>FARM</b>
      </span>
    </div>
  );
};

export default Logo;
