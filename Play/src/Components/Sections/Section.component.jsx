import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
import Card from "../Card/Card.component"; 
import './Section.styles.css'
import { fetchTopAlbums } from '../../API/APIs.js';

const Section = () => {
  const [songsList, setSongsList] = useState([]);

  useEffect(() => {
    const generateTopAlbumSongs = async () => {
      try {
        const topAlbumSongs = await fetchTopAlbums();
        setSongsList(topAlbumSongs);
      } catch (error) {
        console.error("Error fetching top album songs:", error);
      }
    };

    generateTopAlbumSongs();
  }, []);

  return (
    <div className="section">
      <div className="section-header">
        <h3 className="section-title">Top Albums</h3>
        <a href="#">
          <span className="section-btn">Show all</span>
        </a>
      </div>
      <div className= "grid-container">
        <Grid container spacing={1}>
          {songsList.map((song, index) => (
            <Grid item xs={12} sm={3} md={2} lg={1} xl={0} key={index}>
              <Card data={song} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Section;
