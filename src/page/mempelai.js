import React, { Component } from 'react';
import MyBottomNavigation from '../component/bottomnav';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Foto from "../component/foto"
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

class Mempelai extends Component {
    state = {}
    render() {
        return (<div>
            <div style={{
                textAlign: "center",
                padding: "50px",
            }}>
                Assalamu'alaikum warahmatullahi wabarakatuh<br />
Dengan memohon rahmat dan ridho Allah SWT,<br />
Mohon do'a restu Bapak/Ibu/Saudara/i dalam rangka melangsungkan pernikahan putra-putri kami<br />
                <br />
                <center>

                    <Foto />
                </center>
                dr. Denisa Dwi Rahmayani

Putri Kedua
Bapak dr. Moch. Wachid, Sp. T.H.T.-K.L.
Ibu dra. Estri Andayani <br /><br /><br />
dan<br /><br /><br />
dr. Denisa Dwi Rahmayani

Putri Kedua
Bapak dr. Moch. Wachid, Sp. T.H.T.-K.L.
Ibu dra. Estri Andayani
            </div>
            <MyBottomNavigation />
        </div>);
    }
}

export default Mempelai;