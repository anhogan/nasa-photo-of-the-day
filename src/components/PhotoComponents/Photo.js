import React from "react";
import './Photo.css'

const Photo = (props) => {

  return (
    <div>
      <img src={props.data.url} alt={props.data.title} />
    </div>
  );
};

export default Photo;