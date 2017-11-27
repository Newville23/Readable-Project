import React,  { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { Link } from 'react-router-dom'

const Navbar = () => (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
            <li><Link to="/">Home</Link></li>
        </ul>
    </header>

)
export default Navbar;