import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/esm/Row';
import axios from 'axios';

const ChapterPage = () => {
  const [chapter, setChapter] = useState({});
  const { chapterNumber } = useParams();

  useEffect(() => {
    const getChapter = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/v1/chapter/${chapterNumber}/`);
        setChapter(response.data);
      } catch (error) {
        console.error('Error fetching chapter:', error);
        alert('Something went wrong');
      }
    };

    getChapter();
  }, [chapterNumber]);

  const renderContentWithClickableWords = () => {
    if (!chapter.content) return null;

    const words = chapter.content.split(' ');

    return (
      <div>
        {words.map((word, index) => (
          <Link
            key={index}
            to={`/word/${word}/`} 
            className="clickable-word"
          >
            {`${word} `}
          </Link>
        ))}
      </div>
    );
  };

  return (
    <Row className='chapterPage'>
      <h2 style={{ textAlign: 'center' }}>{chapter.reference}</h2>
      {renderContentWithClickableWords()}
    </Row>
  );
};

export default ChapterPage;




