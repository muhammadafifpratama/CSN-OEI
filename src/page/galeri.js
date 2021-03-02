import React, { Component } from 'react';
import MyBottomNavigation from '../component/bottomnav';

class Gallery extends Component {
    state = {}
    render() {
        return (<div>
            <div style={{
                textAlign: "center",
                padding: "50px",
            }}>
                foto foto mempelai
            </div>
            <MyBottomNavigation />
        </div>);
    }
}

export default Gallery;