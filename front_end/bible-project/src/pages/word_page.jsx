
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';
import '../App.css';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useOutletContext } from "react-router-dom";
import WordCard from '../components/WordCard.jsx';
import {reverseBookId} from '../components/new_testament_books.jsx';

const WordPage = () => {
  const [wordData, setWordData] = useState([null]);
  const { word } = useParams();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const bookId = queryParams.get('book');
  const chapterNumber = queryParams.get('chapter');
  const verseNumber = queryParams.get('verse');
  const {favorites, setFavorites} = useOutletContext()
  const [morphologyLoaded, setMorphologyLoaded] = useState(false)
  const navigate = useNavigate();

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



  const handleReturnToText = () => {
    navigate(-1);
  };

 
  return (
    <>
     <div >
      <h2 style={{ display:'flex', justifyContent:'center', marginLeft: '40vw'}}>{word}</h2>
      <Button style={{ display:'flex', justifyContent:'center', marginLeft:'47vw', marginBottom:'5vh'}} onClick={handleReturnToText}>Return to Text</Button>
        <WordCard 
          word={word}
          bookId={reverseBookId[bookId]}
          chapterNumber={chapterNumber}
          verseNumber={verseNumber}
          morphology={wordData}
          morphologyLoaded = {morphologyLoaded}
          favorites={favorites}
          setFavorites={setFavorites}
        /></div>
    </>
  );
};


export default WordPage;




