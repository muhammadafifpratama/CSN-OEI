import React, { Component } from 'react';
import MyBottomNavigation from '../component/bottomnav';
import "./tes.css"

class Sampul extends Component {
    state = { nama: "" }
    componentDidMount() {
        let str = this.props.location.search
        let res = str.split("?");
        this.setState({ nama: res[1] })
        this.getnama()
        console.log(res[1]);
    }

    getnama = () => {
        var tes = localStorage.setItem('myData', this.state.nama);
        var output = tes + " " + this.state.nama
        return output
    }

    render() {
        return (
            <div>
                <div style={{
                    textAlign: "center",
                    paddingTop: "55px",
                }}> The Wedding of
                </div>
                <div style={{ textAlign: "center", padding: "10px" }}>
                    <h1>
                        Nama Mempelai
                    </h1>
                </div>
                <div style={{ textAlign: "center", }}>20 . 20 . 2020</div>
                <div style={{ textAlign: "center", }}>nama penerima invitation adalah {this.state.nama}</div>
                <MyBottomNavigation />
            </div>
        );
    }
}

export default Sampul;