import React, { Component } from 'react';
import MyBottomNavigation from '../component/bottomnav';

class Mempelai extends Component {
    state = {}
    render() {
        return (<div>
            <div style={{
                textAlign: "center",
                padding: "50px",
            }}>
                pembukaan<br />
                thumbnail foto <br />
                informasi detail
            </div>
            <MyBottomNavigation />
        </div>);
    }
}

export default Mempelai;