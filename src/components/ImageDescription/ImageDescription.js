import React from "react";
import Title from './Title';
import Author from './Author';
import CurrentDay from './CurrentDay';

const ImageDescription = (props) => {

  return (
    <div>
      <Title />
      <Author />
      <CurrentDay />
    </div>
  );
};

export default ImageDescription;