import React from "react";

const config = {
  summer: {
    text: "It's time to play with friends",
    iconName: "sun",
  },

  winter: {
    text: "Let's make some snow man!!",
    iconName: "snowflake",
  },
};

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "summer" : "winter";
  }

  return latitude > 0 ? "winter" : "summmer";
};

const Display = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = config[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default Display;
