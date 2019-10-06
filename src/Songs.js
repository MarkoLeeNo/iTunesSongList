import React from "react";

import Song from "./Song";
import classes from "./Songs.module.css";

const Songs = ({ list }) => {
  let cards = <h3>Loading...</h3>;

  if (list) {
    cards = list.map((m, i) => <Song key={i} item={m} />);
  }

  return (
    <div className={classes.Container}>
      <div className={classes.ContainerInner}>
          {cards}
      </div>
    </div>
  );
};

export default Songs;
