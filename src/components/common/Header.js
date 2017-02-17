import React from 'react';
import { Link, IndexLink } from 'react-router';
import Nav from './Nav'


const Header = () => {
  return (
    <header>
      <section className="row">
        <Link to="/" className="titleDiv">
          <p className="titleTxt">dan gastineau <span className="titleTxt2">/ data viz</span></p>
        </Link>
        <div className="box blue3"/>
        <div className="box blue1 desktopOnly"/>
        <div className="box blue2 desktopOnly"/>
        <div className="box yellow3 desktopOnly"/>
        <div className="box yellow3 desktopOnly"/>
        <div className="box yellow2 desktopOnly"/>
        <div className="box yellow3"/>
        <div className="box yellow4"/>
      </section>
      <section className="row2">
        <div className="box blue1"/>
        <div className="box blue1"/>
        <div className="box blue2"/>
        <div className="box blue3"/>
        <div className="box blue1"/>
        <div className="box blue3"/>
        <div className="box blue2"/>
        <div className="box blue1"/>
        <div className="box blue3"/>
        <div className="box yellow3"/>
        <div className="box yellow3"/>
        <div className="box yellow4"/>
        <div className="box yellow2"/>
        <div className="box yellow2"/>
        <div className="box yellow3"/>
      </section>
      <Nav/>
    </header>
  );
};

export default Header;
