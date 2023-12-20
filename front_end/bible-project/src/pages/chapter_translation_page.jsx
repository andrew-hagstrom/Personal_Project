import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/esm/Row';
import axios from 'axios';

const ChapterTranslationPage = () => {
  const [chapterTranslation, setChapterTranslation] = useState({});
  const { chapterNumber } = useParams();

  useEffect(() => {
    const getChapterTranslation = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/v1/chapter/${chapterNumber}/translation/`);
        setChapterTranslation(response.data);
       
      } catch (error) {
        console.error('Error fetching chapter:', error);
        alert('Something went wrong');
      }
    };

    getChapterTranslation();
  }, [chapterTranslation]);
 

  return (
    <Row className='chapterPage'>
      <h2 style={{ marginTop: "30vh", marginBottom:'0vh', marginLeft:'40vw'}}>{chapterTranslation.reference}</h2>
      <p style={{fontSize: "20px", margin: '10px', color: 'black'}}>
      {chapterTranslation.content}
     
      </p>
    </Row>
  );
};

export default ChapterTranslationPage;







// const Translation = () => {
//     return (
//       <div id="home-page">
//         <h2>Translation</h2>
//         <div>
//           <p>
//            English translation of chapter in Luke displayed here.
//           </p>
//         </div>
//       </div>
//     );
//   };
  
//   export default Translation;