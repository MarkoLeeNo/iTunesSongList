import React from "react";

import classes from "./Song.module.css";
import { truncStr } from "./utils";

const SongCard = props => {
  //const { title, poster_path, vote_average } = props.item;
  const { trackName, collectionName, artworkUrl100, artistName } = props.item;

  return (
      <div
        className={classes.Container}
        style={{
          backgroundImage:
          artworkUrl100 && `url(${artworkUrl100})`
        }}
      >
        <div className={classes.VoteContainer}>
          <span className={classes.Vote}>{trackName}</span>
        </div>

        <div className={classes.Bottom}>
          <h3 className={classes.Title}>{collectionName}</h3>
        </div>
      </div>
  );
};

export default SongCard;
