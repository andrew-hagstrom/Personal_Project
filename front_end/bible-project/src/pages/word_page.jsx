
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import '../App.css';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useOutletContext } from "react-router-dom";
import WordCard from '../components/WordCard.jsx'

const WordPage = () => {
  const [wordData, setWordData] = useState([null]);
  // const [word, setWord] = useState([])
  const { word } = useParams();
  const {favorites, setFavorites} = useOutletContext()
  const [morphologyLoaded, setMorphologyLoaded] = useState(false)
  console.log(wordData)

  useEffect(() => {
    const fetchWordData = async () => {
      try {
        let token = localStorage.getItem("token")
        axios.defaults.headers.common['Authorization'] = `Token ${token}`;
        const response = await axios.get(`http://127.0.0.1:8000/api/v1/word/${word}/`);
        setWordData(response.data[1][1][0][2][1][0][1]);
        setMorphologyLoaded(true)
      
      } catch (error) {
        console.error('Error fetching word data:', error);
      }   
    };

    fetchWordData();
  }, [word]);

 
  return (
    <>
     <div >
      <h2 style={{ display:'flex', justifyContent:'center', marginLeft: '40vw'}}>{word}</h2>
        <WordCard 
          word={word}
          morphology={wordData}
          morphologyLoaded = {morphologyLoaded}
          favorites={favorites}
          setFavorites={setFavorites}
        /></div>
    </>
  );
};


export default WordPage;




