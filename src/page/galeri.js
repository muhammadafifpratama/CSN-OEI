import React, { Component } from 'react';
import MyBottomNavigation from '../component/bottomnav';
import ImageGridList from "../component/tes"

class Gallery extends Component {
    state = {}
    render() {
        return (<div>
            ini galeri
            <ImageGridList />
            <MyBottomNavigation />
        </div>);
    }
}

export default Gallery;