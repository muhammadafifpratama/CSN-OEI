import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { useHistory } from "react-router-dom";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LoupeIcon from '@material-ui/icons/Loupe';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#F8F8F8",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "60px",
        width: "100%",
    },
});

export default function LabelBottomNavigation() {
    let history = useHistory();
    let cur = history.location.pathname
    let curr = cur.split("/")
    const classes = useStyles();
    const [value, setValue] = React.useState(curr[1]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root }showLabels>
            <BottomNavigationAction label="sampul" value="sampul" icon={<AssignmentIndIcon />} onClick={() => history.push("/sampul?edgar")} />
            <BottomNavigationAction label="agenda" value="agenda" icon={<MenuBookIcon />} onClick={() => history.push("/agenda")} />
            <BottomNavigationAction label="galeri" value="galeri" icon={<PhotoLibraryIcon />} onClick={() => history.push("/galeri")} />
            <BottomNavigationAction label="live" value="live" icon={<LiveTvIcon />} onClick={() => history.push("/live")} />
            <BottomNavigationAction label="mempelai" value="mempelai" icon={<SupervisorAccountIcon />} onClick={() => history.push("/mempelai")} />
            <BottomNavigationAction label="penutup" value="penutup" icon={<LoupeIcon />} onClick={() => history.push("/penutup")} />
        </BottomNavigation>
    );
}
