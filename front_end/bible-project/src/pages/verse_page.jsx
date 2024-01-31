import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { api } from "../utilities";
import Button from "react-bootstrap/Button";
import Loader from '../components/Loader';

const VersePage = () => {
  const [verseData, setVerseData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { bookId, chapterNumber, verseNumber } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`book/${bookId}/chapter/${chapterNumber}/verse/${verseNumber}/`);
        setVerseData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching verse data:', error);
      }
    };

    fetchData();
  }, [chapterNumber, verseNumber]);

  const handleWordClick = (word) => {
    const cleanedWord = word.replace(/[.,;:]/g, '');
    navigate(`/word/${cleanedWord}?book=${bookId}&chapter=${chapterNumber}&verse=${verseNumber}`);
    // window.location.reload();
  };

  const renderContentWithClickableWords = () => {
    if (!verseData.content) return null;

    const words = verseData.content.split(' ');

  

    return (
      <div>
        {words.map((word, index) => (
          <Link
            key={index}
            onClick={() => handleWordClick(word)}
            // to={`/word/${word}?book=${bookId}&chapter=${chapterNumber}&verse=${verseNumber}`} 
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
      {isLoading ? (<Loader />) : (
      <div>
      <p style={{textAlign:'center'}}>
      <h2 style={{ position: 'absolute', top: '0', width: '100%', marginTop: '30vh'}}>{verseData.reference}</h2>
      </p>
      <p style={{textAlign:'center'}}>
      <Button style={{width:'200px', height:'40px', marginTop:'5vh', marginBottom: '5vh', background:'beige'}} onClick={handleVerseTranslation}>See English Text</Button>
      </p>
      <p style={{fontSize: '30px', margin: '20px'}}>
      {renderContentWithClickableWords()}
      </p>
     </div>
      )}
    </div>
  );
};

export default VersePage;



