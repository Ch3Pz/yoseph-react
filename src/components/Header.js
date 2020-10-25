import React, {  useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    const headerWatchScroll = () => {
      let scrollTop = $(window).scrollTop();

      if ( scrollTop > 100 ){
        $('.header').addClass('opaque');
      }else{
        $('.header').removeClass('opaque');
      }
    }
    $(window).on('scroll', headerWatchScroll);
  }, []);
  return (
    <header className="header">
      <div className="container">
        <div className="header__left">
          <Link to="/">
            <img className="header-icon" src="/img/icon2.png" alt="logo"/>
          </Link>
          &nbsp;
          <h2 className="header-text"></h2>
        </div>
        {/*
        <button className="hamburger" type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        */}
      </div>
    </header>
  );
}

export default Header;
