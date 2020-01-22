import React from "react";

const Photo = (props) => {

  return (
    <div>
      <img src={props.data.url} alt={props.data.title} />
    </div>
  );
};

export default Photo;