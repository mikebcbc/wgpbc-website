import React from "react";
import { Link } from "gatsby";

const MobileNav = ({ isOpen, setIsOpen }) => {
  console.log(isOpen);
  console.log(setIsOpen);
  return (
    <div className={`side-nav-container ${isOpen && "active"}`}>
      <div className="humburger-menu">
        <div
          className="humburger-menu-lines side-menu-close"
          onClick={() => setIsOpen(!isOpen)}
        ></div>
      </div>
      <div className="side-menu-wrap">
        <ul className="side-menu-ul">
          <li className="sidenav__item">
            <a href="/">home</a>
            <span className="menu-plus-icon"></span>
            <ul className="side-sub-menu">
              <li>
                <Link to="/">Home 1</Link>
              </li>
              <li>
                <Link to="/index2">Home 2</Link>
              </li>
            </ul>
          </li>
          <li className="sidenav__item">
            <a href="#none">causes</a>
            <span className="menu-plus-icon"></span>
            <ul className="side-sub-menu">
              <li>
                <Link to="/causes">causes</Link>
              </li>
              <li>
                <Link to="/causes-detail">causes detail</Link>
              </li>
              <li>
                <Link to="/donate">donate now</Link>
              </li>
            </ul>
          </li>
          <li className="sidenav__item">
            <a href="#none">event</a>
            <span className="menu-plus-icon"></span>
            <ul className="side-sub-menu">
              <li>
                <Link to="/events">events</Link>
              </li>
              <li>
                <Link to="/events-detail">events detail</Link>
              </li>
            </ul>
          </li>
          <li className="sidenav__item">
            <a href="#none">news</a>
            <span className="menu-plus-icon"></span>
            <ul className="side-sub-menu">
              <li>
                <Link to="/news">news</Link>
              </li>
              <li>
                <Link to="/single-news">news detail</Link>
              </li>
            </ul>
          </li>
          <li className="sidenav__item">
            <a href="#none">pages</a>
            <span className="menu-plus-icon"></span>
            <ul className="side-sub-menu">
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/gallery">gallery</Link>
              </li>
              <li>
                <Link to="/volunteer">become a volunteer</Link>
              </li>
              <li>
                <Link to="/team">our team</Link>
              </li>
              <li>
                <Link to="/sponsor">sponsors</Link>
              </li>
            </ul>
          </li>
          <li className="sidenav__item">
            <Link to="/contact">contact</Link>
          </li>
        </ul>
        <ul className="side-social">
          <li>
            <a href="#none">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#none">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#none">
              <i className="fa fa-youtube-play"></i>
            </a>
          </li>
          <li>
            <a href="#none">
              <i className="fa fa-google-plus"></i>
            </a>
          </li>
        </ul>
        <div className="side-btn">
          <Link className="theme-btn" to="/donate">
            donate now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
