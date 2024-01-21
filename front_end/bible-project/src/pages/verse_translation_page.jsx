import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/esm/Row';
import axios from 'axios';
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
        const response = await axios.get(`http://127.0.0.1:8000/api/v1/book/${bookId}/chapter/${chapterNumber}/verse/${verseNumber}/translation/`);
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
    <Row className='chapterPage'>
      <h2 style={{ marginTop: "20vh", marginBottom:'0vh', marginLeft:'45vw'}}>{verseTranslation.reference}</h2>
      <Button style={{width:'200px', height:'40px', marginTop:'5vh', marginBottom:'5vh', background:'beige', marginLeft:'40vw'}} onClick={handleNavToGreek}>See Greek Text</Button>
      <p style={{fontSize: "20px", margin: '10px', color: 'black'}}>
      {verseTranslation.content}
     </p>
    </Row>
    )}
    </div>
  );
};

export default VerseTranslationPage;
