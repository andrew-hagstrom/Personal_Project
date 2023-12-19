import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const VersePage = () => {
  const [verseData, setVerseData] = useState({});
  const { chapterNumber, verseNumber } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/v1/chapter/${chapterNumber}/verse/${verseNumber}/`);
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

  return (
    <div className="verse-container">
      <h2>{verseData.reference}</h2>
      {renderContentWithClickableWords()}
    </div>
  );
};

export default VersePage;



