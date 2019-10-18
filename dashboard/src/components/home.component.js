import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/home.css';
import IcecreamSrc from '../src/icecream.svg'


export default class Home extends Component {
    render() {
        return (
            <div id="home-container">
                <div id="title">
                    <div>MUSEUM OF ICE CREAM</div>
                </div>
                <div className="spreader1">

                </div>
                <div id="logo-container">
                <Link to="icecream"><img id="logo" src={IcecreamSrc}></img></Link>
                </div>

                <div id="button">
                    <Link to="icecream">ENTER</Link>
                </div>
                <div className="spreader2">

                </div>
            </div>
        )
    }
}