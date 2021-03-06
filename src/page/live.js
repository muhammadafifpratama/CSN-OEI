import React, { Component } from 'react';
import MyBottomNavigation from '../component/bottomnav';
import { Button } from 'reactstrap';

class Live extends Component {
    state = {}
    render() {
        return (<div>
            <div style={{
                textAlign: "center",
                padding: "50px",
            }}>
                <Button color="danger">link yutub disini</Button>
            </div>
            <MyBottomNavigation />
        </div>);
    }
}

export default Live;