import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from "react-bootstrap/Button";

const VersePage = () => {
  const [verseData, setVerseData] = useState({});
  const { bookId, chapterNumber, verseNumber } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/v1/book/${bookId}/chapter/${chapterNumber}/verse/${verseNumber}/`);
        setVerseData(response.data);
      } catch (error) {
        console.error('Error fetching verse data:', error);
      }
    };

    fetchData();
  }, [chapterNumber, verseNumber]);

  

  const renderContentWithClickableWords = () => {
    if (!verseData.content) return null;

    const words = verseData.content.split(' ');

  

    return (
      <div>
        {words.map((word, index) => (
          <Link
            key={index}
            to={`/word/${word}`} 
            className="clickable-word"
          >
            {`${word} `}
          </Link>
        ))}
      </div>
    );
  };

  const handleVerseTranslation = () => {
    navigate('translation/');
    window.location.reload(); 
    };

  return (
    <div className="verse-container">
      <h2 style={{ position: 'absolute', top: '0', width: '100%', textAlign: 'center', marginTop: '30vh'}}>{verseData.reference}</h2>
      <Button style={{width:'200px', height:'40px', marginTop:'5vh', marginBottom: '5vh', background:'beige', marginLeft:'40vw'}} onClick={handleVerseTranslation}>See English Text</Button>
      <p style={{fontSize: '30px', margin: '20px'}}>
      {renderContentWithClickableWords()}
      </p>
    </div>
  );
};

export default VersePage;



