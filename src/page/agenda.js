import React, { Component } from 'react';
import MyBottomNavigation from '../component/bottomnav';

class Agenda extends Component {
    state = {}
    render() {
        return (<div>
            <div style={{
                textAlign: "center",
                paddingTop: "55px",
                paddingBottom: "15px"
            }}>
                Rankaian Acara
                </div>
            <div style={{ textAlign: "center", padding: "10px" }}> Akad Nikah </div>
            <div style={{ textAlign: "center", padding: "10px" }}> Senin 30 Februari 00:00 WIB 2020 </div>
            <div style={{ textAlign: "center", paddingTop: "100px" }}> Siraman Mempelai Pria: 14-02-2021 </div>
            <div style={{ textAlign: "center", padding: "20px" }}> Siraman Mempelai Wanita: 19-02-2021 </div>
            <MyBottomNavigation />
        </div>);
    }
}

export default Agenda;