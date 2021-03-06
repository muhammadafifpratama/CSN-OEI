import React, { Component } from 'react';
import MyBottomNavigation from '../component/bottomnav';
import Countdown from 'react-countdown';
import tes from "./homepage.png"

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return <h1>{days} hari lagi Hours = {hours}, minute = {minutes}:{seconds}</h1>;
};

class Home extends Component {
    state = {}
    render() {
        return (
            <div style={{ backgroundImage: `url("https://cdn.discordapp.com/attachments/776072772685398016/817632537090195456/Tes_Homepage.png")})` }}>
                <Countdown date="2021-06-01" renderer={renderer} />
                hello
            </div>);
    }
}

export default Home;