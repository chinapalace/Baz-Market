import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto'
  },
  titleStyle: {
    color: 'rgb(255,90,95)'
  }
};

const tilesData = [
  {
    img: 'https://source.unsplash.com/random',
    title: 'Dancing',
    author: 'jill111'
  },
  {
    img: 'https://source.unsplash.com/featured/nature',
    title: 'Singing',
    author: 'pashminu'
  },
  {
    img: 'https://source.unsplash.com/featured/ocean',
    title: 'Surfing',
    author: 'Danson67'
  },
  {
    img: 'https://source.unsplash.com/featured/girls',
    title: 'Playing Guitar',
    author: 'fancycrave1'
  },
  {
    img: 'https://source.unsplash.com/featured/animals',
    title: 'Hats',
    author: 'Hans'
  },
  {
    img: 'https://source.unsplash.com/featured/street',
    title: 'Honey',
    author: 'fancycravel'
  },
  {
    img: 'https://source.unsplash.com/featured/nature',
    title: 'Vegetables',
    author: 'jill111'
  },
  {
    img: 'https://source.unsplash.com/beach',
    title: 'Surfing',
    author: 'BkrmadtyaKarki'
  }
];

const GridListHorizontal = () => (
  <div>
    <br />
    <h2>Explore</h2>
    <div style={styles.root}>
      <GridList style={styles.gridList} cols={2.2}>
        {tilesData.map(tile => (
          <GridTile
            key={tile.img}
            title={tile.title}
            titleStyle={styles.titleStyle}
            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          >
            <img src={tile.img} />
          </GridTile>
        ))}
      </GridList>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div style={styles.root}>
      <GridList style={styles.gridList} cols={2.2}>
        {tilesData.map(tile => (
          <GridTile
            key={tile.img}
            title={tile.title}
            titleStyle={styles.titleStyle}
            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          >
            <img src={tile.img} />
          </GridTile>
        ))}
      </GridList>
    </div>
  </div>
);

export default GridListHorizontal;
