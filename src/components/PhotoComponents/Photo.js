import React from "react";
import './Photo.css'

const Photo = (props) => {
  if (!props.data.url) return <h3>Loading...</h3>;

  return (
    <div>
      <img src={props.data.url} alt={props.data.title} />
    </div>
  );
};

export default Photo;