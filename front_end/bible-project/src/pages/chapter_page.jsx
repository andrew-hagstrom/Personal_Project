import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/esm/Row';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';

const ChapterPage = () => {
  const [chapter, setChapter] = useState({});
  const { chapterNumber } = useParams();
  const navigate = useNavigate(); 
  
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

  const handleTranslation = () => {
    navigate(`/chapter/${chapterNumber}/translation/`);
    window.location.reload(); 
  };

  return (
    <div>
    <Row className='chapterPage'>
      <h2  style={{ marginTop: "30vh", marginBottom:'0vh', marginLeft:'40vw'}}>{chapter.reference}</h2>
      <Button style={{width:'200px', height:'40px', marginTop:'5vh', background:'beige', marginLeft:'40vw'}} onClick={handleTranslation}>See Translation</Button>
      <p style={{fontSize: "20px", margin: '5px', color: 'black', marginLeft: '2vw'}}>
      {renderContentWithClickableWords()}
      </p>
    </Row></div>
  );
};

export default ChapterPage;




