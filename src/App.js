import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from './components/Header/Header';
import ImageDescription from './components/ImageDescription/ImageDescription';
import Photo from './components/PhotoComponents/Photo';
import DaySelector from './components/DaySelector/DaySelector';
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error.message)
      });
  }, []);
  
  // useEffect(() => {
  //   const fetchData = () => {
  //     axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  //     .then( response => {
  //       console.log(response.data);
  //       setData(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error.message)
  //     });
  //   }

  //   fetchData();
  // }, [query]);

  return (
    <div className="App">
      <Header />
      <ImageDescription data={data}/>
      <Photo data={data}/>
      <DaySelector />
    </div>
  );
}

export default App;
