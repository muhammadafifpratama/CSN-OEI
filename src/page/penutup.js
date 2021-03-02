import React, { Component } from 'react';
import MyBottomNavigation from '../component/bottomnav';

class Penutup extends Component {
    state = {}
    render() {
        return (<div>
            <div style={{
                textAlign: "center",
                padding: "50px",
            }}>
                ucapan penutup <br />
                silahkan klik disini untuk mengirim doa kepada pada mempelai
            </div>
            <MyBottomNavigation />
        </div>);
    }
}

export default Penutup;