import React, { Component } from 'react';
import MyBottomNavigation from '../component/bottomnav';

class Agenda extends Component {
    state = {}
    render() {
        return (<div>
            <div style={{
                textAlign: "center",
                padding: "50px",
            }}>
                rankaian acara <br />
                    count down acara
                </div>
            <MyBottomNavigation />
        </div>);
    }
}

export default Agenda;