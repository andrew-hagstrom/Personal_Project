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




//   import Row from "react-bootstrap/esm/Row";
//   import { useEffect, useState } from "react";
//   import axios from "axios";
//   // import ReactHtmlParser from 'react-html-parser';
//   import { useParams } from 'react-router-dom';
//   import '../App.css';

 
//   export const ChapterPage = () => {
  
//     const [chapter, setChapter] = useState([]);
//     const{ chapterNumber } = useParams();
    
    
//     const getChapter = async () => {
//     // request would be sent within this function
//     let response = await axios
//       .get('http://127.0.0.1:8000/api/v1/chapter/'+ chapterNumber + '/')
//       .catch((err) => {
//         console.log(err);
//         alert("something went wrong");
//       });
//       setChapter(response.data);
//     };

//   useEffect(() => {
//     getChapter();
//   }, []);

//   return (
//     <Row className='chapterPage'>
//       <h2 style={{ textAlign: "center" }}>{chapter.reference}</h2>
//       <div>{chapter.content}</div>
//     </Row>
//   );
// };


