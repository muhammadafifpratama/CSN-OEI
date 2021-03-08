import React, { Component } from 'react';
import foto from "./foto.png"
import Countdown from 'react-countdown';

const renderer = ({ days, hours, minutes }) => {
    return <h1>{days}&nbsp; {hours}&nbsp; &nbsp; {minutes}</h1>;
};

class Home extends Component {
    state = {}
    render() {
        return (
            <div style={{
                backgroundImage: `url(${foto})`,
                position: "absolute", width: "100%", height: "100%", backgroundSize: "100%"
            }}>
                <div style={{ left: "40%", position: "absolute", top: "45%", fontfamily: 'Arial', color: "#fff", fontSize: "30px" }}>
                    Undangan Pernikahan
                </div>
                <div style={{ left: "32%", position: "absolute", top: "48%", fontfamily: 'Arial', color: "#fff", fontSize: "100px" }}>
                    Fia &amp; Edgar
                </div>
                <div style={{ left: "42%", position: "absolute", top: "70%", fontfamily: 'Arial', color: "#fff", fontSize: "30px" }}>
                    27 juni 2021
                </div>
                <div style={{ left: "42%", position: "absolute", top: "80%", fontfamily: 'Arial', color: "#fff", fontSize: "30px" }}>
                    <Countdown date="2021-06-27" renderer={renderer} />
                </div>
                <div style={{ left: "42%", position: "absolute", top: "85%", fontfamily: 'Arial', color: "#fff", fontSize: "30px" }}>
                    Days          Hours        minutes
                </div>
            </div >);
    }
}

export default Home;