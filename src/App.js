import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from './components/Header/Header';
import ImageDescription from './components/ImageDescription/ImageDescription';
import Photo from './components/PhotoComponents/Photo';
import DaySelector from './components/DaySelector/DaySelector';
import "./App.css";

function App() {
  const [photo, setPhoto] = useState("");
  
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then( response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.message)
      });
  });

  return (
    <div className="App">
      <Header />
      <ImageDescription />
      <Photo />
      <DaySelector />
    </div>
  );
}

export default App;
