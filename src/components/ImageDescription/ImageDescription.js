import React from "react";
import Title from './Title';
import Author from './Author';
import CurrentDay from './CurrentDay';
import './ImageDescription.css';

const ImageDescription = (props) => {

  return (
    <div className="image-description">
      <Title title={props.data.title}/>
      <Author author={props.data.copyright}/>
      <CurrentDay day={props.data.date}/>
    </div>
  );
};

export default ImageDescription;