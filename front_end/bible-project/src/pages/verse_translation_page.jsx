import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/esm/Row';
import axios from 'axios';
import { api } from "../utilities";
import Button from "react-bootstrap/Button";
import Loader from '../components/Loader';

const VerseTranslationPage = () => {
  const [verseTranslation, setVerseTranslation] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { bookId, chapterNumber, verseNumber } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getVerseTranslation = async () => {
      try {
        const response = await api.get(`book/${bookId}/chapter/${chapterNumber}/verse/${verseNumber}/translation/`);
        setVerseTranslation(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching chapter:', error);
        alert('Something went wrong');
      }
    };

    getVerseTranslation();
  }, [bookId, chapterNumber, verseNumber]);

  const handleNavToGreek = () => {
    navigate(`/${bookId}/chapter/${chapterNumber}/verse/${verseNumber}/`); 

  }
 

  return (
    <div>
    {isLoading ? (<Loader />) : (
    <div>
    <p style={{textAlign:'center'}}>
    <h2 style={{ position: 'absolute', top: '0', width: '100%', marginTop: '30vh'}}>{verseTranslation.reference}</h2>
    </p>
    <p style={{textAlign:'center'}}>
    <Button style={{width:'200px', height:'40px', marginTop:'10vh', marginBottom: '5vh', background:'beige'}}  onClick={handleNavToGreek}>See Greek Text</Button>
    </p>
    <p style={{fontSize: "30px", margin: '20px', color: 'black'}}>
      {verseTranslation.content}
     </p>
    </div>
    )}
    </div>
  );
};

export default VerseTranslationPage;
