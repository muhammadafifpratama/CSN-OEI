import React, { Component } from 'react';
import foto from "./foto.png"
import Countdown from 'react-countdown';
import "./home.css"
import MyBottomNavigation from '../component/bottomnav';

const renderer = ({ days, hours, minutes }) => {
    return <h1>{days}&nbsp; {hours}&nbsp; &nbsp;</h1>;
};

class Home extends Component {
    state = {}
    render() {
        return (
            <div className="bg">
                <div className="a" >
                    Undangan Pernikahan
                </div>
                <div className="fia">
                    Fia
                </div>
                <div className="dan">
                    &amp;
                </div>
                <div className="edgar">
                    Edgar
                </div>
                <div className="tanggal">
                    27 juni 2021
                </div>
                <div className="countdown">
                    <Countdown date="2021-06-27" renderer={renderer} />
                </div>
                <div className="hari">
                    Days          Hours
                </div>
                <MyBottomNavigation />
            </div >);
    }
}

export default Home;