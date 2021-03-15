import React, { Component } from 'react';
import MyBottomNavigation from '../component/bottomnav';
import gambar from "./assets/Untitled.png"
import "./ngetes.css"

class Agenda extends Component {
    state = {}
    render() {
        return (
            <div>
                <img src={gambar} className="a" />
                <MyBottomNavigation />
            </div>
        );
    }
}

export default Agenda;