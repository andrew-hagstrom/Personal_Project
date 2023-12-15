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



// import Row from "react-bootstrap/esm/Row";
// import { useEffect, useState } from "react";
// import axios from "axios";
// // import ReactHtmlParser from 'react-html-parser';
// import { useParams } from 'react-router-dom';
// import '../App.css';


// const VersePage = () => {
//   const [verseData, setVerseData] = useState({});
//   const { chapterNumber, verseNumber } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/v1/chapter/' + chapterNumber +'/verse/' + verseNumber + '/');
//         setVerseData(response.data);
//       } catch (error) {
//         console.error('Error fetching verse data:', error);
//       }
//     };

//     fetchData();
//   }, [chapterNumber, verseNumber]);

//   return (
//     <div className="verse-container">
//       <h2>{verseData.reference}</h2>
//       <p>{verseData.content}</p> 
//     </div>
//   );
// };

// export default VersePage;



// export const Verse = () => {
//   const [chapter, setChapter] = useState([]);
//   const { chapterNumber } = useParams();
//   const [verse, setVerse] = useState([]);
//   const { verseNumber } = useParams();

//   const getChapter = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/api/v1/chapter/'+ chapterNumber + '/');
//       setChapter(response.data);
//     } catch (err) {
//       console.log(err);
//       alert("Something went wrong");
//     }
//   };

//   useEffect(() => {
//     getChapter();
//   }, [chapterNumber]); 

//   const getVerse = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/api/v1/chapter/'+ chapterNumber +'verse/'+verseNumber+'/');
//       setVerse(response.data);
//     } catch (err) {
//       console.log(err);
//       alert("Something went wrong");
//     }
//   };

//   useEffect(() => {
//     getVerse();
//   }, [chapterNumber, verseNumber]); 

//   return (
//     <Row className='chapterPage'>
//       <h1 style={{ textAlign: "center" }}>Verse</h1>
//       <div>{verse.content}</div>
//     </Row>
//   );
// };

