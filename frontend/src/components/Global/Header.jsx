import React from "react";
import '@/src/styles/Header.css'
const Header = () => {
  return (
    <>
      <div className="main-header bg-red-500 rounded-3xl shadow-2xl text-center">
        <img className='main-logo' src='https://cdn-icons-png.freepik.com/512/6426/6426661.png' width="20%" height="auto"></img>
        <h1 className="main-header-h1">JAPANEASY</h1>
        <h2 className="main-header-h2">Learn Japanese the easy way</h2>
      </div>
    </>
  );
};

export default Header;
