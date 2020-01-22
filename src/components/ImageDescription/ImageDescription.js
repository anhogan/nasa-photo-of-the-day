import React from "react";
import Title from './Title';
import Author from './Author';
import CurrentDay from './CurrentDay';

const ImageDescription = (props) => {

  return (
    <div>
      <Title title={props.data.title}/>
      <Author author={props.data.copyright}/>
      <CurrentDay day={props.data.date}/>
    </div>
  );
};

export default ImageDescription;