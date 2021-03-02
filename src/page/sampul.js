import React, { Component } from 'react';
import MyBottomNavigation from '../component/bottomnav';
import "./tes.css"

class Sampul extends Component {
    state = { nama: "" }
    componentDidMount() {
        let str = this.props.location.search
        let res = str.split("?");
        this.setState({ nama: res[1] })
        // console.log(tes + "yang ini");
    }
    render() {
        return (
            <div>
                <div style={{
                    textAlign: "center",
                    padding: "50px",
                }}> The Wedding of Nama Mempelai
                </div>
                <div style={{ textAlign: "center", }}>Tanggal Akad</div>
                <div style={{ textAlign: "center", }}>nama penerima invitation adalah {this.state.nama}</div>
                <MyBottomNavigation />
            </div>
        );
    }
}

export default Sampul;