import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * 
 */

const tileData = [
    {
        img: "https://inv.simanten.com/images/galeri/4552-1497_1.jpg",
        title: 'Image',
        author: 'author',
        cols: 3,
    },
    {
        img: "https://inv.simanten.com/images/galeri/4552-1497_2.jpg",
        title: 'Image',
        author: 'author',
        cols: 3,
    },
    {
        img: "https://inv.simanten.com/images/galeri/4552-1497_3.jpg",
        title: 'Image',
        author: 'author',
        cols: 3,
    },
    {
        img: "https://inv.simanten.com/images/galeri/4552-1497_4.jpg",
        title: 'Image',
        author: 'author',
        cols: 3,
    },
    {
        img: "https://inv.simanten.com/images/galeri/4552-1497_5.jpg",
        title: 'Image',
        author: 'author',
        cols: 3,
    },
    {
        img: "https://inv.simanten.com/images/galeri/4552-1497_6.jpg",
        title: 'Image',
        author: 'author',
        cols: 3,
    },
    {
        img: "https://inv.simanten.com/images/galeri/4552-1497_7.jpg",
        title: 'Image',
        author: 'author',
        cols: 3,
    },
    {
        img: "https://inv.simanten.com/images/galeri/4552-1497_8.jpg",
        title: 'Image',
        author: 'author',
        cols: 3,
    },
    {
        img: "https://inv.simanten.com/images/galeri/4552-1497_9.jpg",
        title: 'Image',
        author: 'author',
        cols: 3,
    },
    {
        img: "https://inv.simanten.com/images/galeri/4552-1497_10.jpg",
        title: 'Image',
        author: 'author',
        cols: 3,
    },
    {
        img: "https://inv.simanten.com/images/galeri/4552-1497_11.jpg",
        title: 'Image',
        author: 'author',
        cols: 3,
    },
    {
        img: "https://inv.simanten.com/images/galeri/4552-1497_12.jpg",
        title: 'Image',
        author: 'author',
        cols: 3,
    },
    {
        img: "https://inv.simanten.com/images/galeri/4552-1497_13.jpg",
        title: 'Image',
        author: 'author',
        cols: 3,
    },
    {
        img: "https://inv.simanten.com/images/galeri/4552-1497_14.jpg",
        title: 'Image',
        author: 'author',
        cols: 3,
    },
];

export default function ImageGridList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img src={tile.img} alt={tile.title} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
