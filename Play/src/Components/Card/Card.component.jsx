/* eslint-disable react/prop-types */
// import React from "react";

// eslint-disable-next-line no-unused-vars

import "./Card.styles.css";

const Card = ({data}) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <img src={data.image} alt="" className="card-image" />
           <button className="card-chip">{`${data.follows} follows`}</button>
          <div className="card-name">
            <p>{data.title}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
