import React from "react";
import Filter from "../../components/Filter";
import Location from "../../components/Location";
import Logo from "../../components/Logo";
import SavedList from "../../components/SavedList";
import SearchBar from "../../components/SearchBar";
import { RiUserLine } from "react-icons/ri";
import Cart from "../../components/Cart";
import './styles.scss'
const Header = () => {
  return (
    <header className='cfHeader'>
      <Logo />
      <SearchBar />
      <div>
        <Location />
        <Filter />
        <SavedList />
        <RiUserLine className="user"/>
        <Cart />
      </div>
    </header>
  );
};

export default Header;
