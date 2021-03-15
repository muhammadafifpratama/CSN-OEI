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
                بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ<br /> <br />
                Dengan memohon ridho Allah SWT, kami mengundang
Bapak/Ibu untuk menyelenggarakan akad dan resepsi pernikahan
<br /><br />
Lathfia Ameera Nasri, M.iKom<br />
&amp;<br />
Edgar Rahmadian Harris, S.ST<br /><br />
Yang inshaa Allah akan dilaksanakan pada :<br />
Minggu, 27 Juni 2021<br /><br />
Akad (keluarga)
09.00 - 10.30
<br /><br />
Resepsi
10.30 - 13.00
<br /><br />
Bertempat di Hotel Gran Mahakam, Jakarta Selatan
            </div>
            <MyBottomNavigation />
        </div>);
    }
}

export default Mempelai;