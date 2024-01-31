import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/esm/Row';
import axios from 'axios';
import { api } from "../utilities";
import { useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import Loader from '../components/Loader';

const ChapterPage = () => {
  const [chapter, setChapter] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { bookId, chapterNumber } = useParams();
  const navigate = useNavigate(); 

  const handleWordClick = (event, clickedWord, wordIndex) => {
    event.preventDefault();
  
    console.log("Chapter Content:", chapter.content);
  
    const cleanedClickedWord = clickedWord.replace(/[.,;:]/g, ''); // Remove punctuation
    const verseNumber = findVerseNumber(chapter.content, cleanedClickedWord, wordIndex);
  
    console.log(`Clicked Word: ${cleanedClickedWord}, Word Index: ${wordIndex}, Verse Number: ${verseNumber}`);
  
    if (verseNumber !== null) {
      navigate(`/word/${cleanedClickedWord}/?book=${bookId}&chapter=${chapterNumber}&verse=${verseNumber}`);
      // window.location.reload();
    } else {
      console.error(`Verse number not found for ${cleanedClickedWord}`);
      // Log the words in the chapter to see if there's an issue with the regex
      const wordsInChapter = chapter.content.split(/\s+/);
      console.log("Words in Chapter:", wordsInChapter);
    }
  };

  const findVerseNumber = (content, clickedWord, wordIndex) => {
    const words = content.split(/\s+/);
    console.log("Clicked Word:", clickedWord, "Word Index:", wordIndex);
  
    let verseNumber = null;
  
    for (let i = wordIndex; i >= 0; i--) {
      const word = words[i].replace(/[.,;:]/g, '').toLowerCase();
      console.log("Current Word:", word);
  
      const matches = word.match(/\[(\d+)]/);
      console.log("Matches:", matches);
  
      if (matches) {
        verseNumber = matches[1];
        console.log("Verse Number Found:", verseNumber);
        break; // Stop iteration once verse number is found
      }
    }
  
    if (verseNumber === null) {
      console.error(`Verse number not found for ${clickedWord}`);
    }
  
    return verseNumber;
  };
  

  useEffect(() => {
    const getChapter = async () => {
      try {
        const response = await api.get(`book/${bookId}/chapter/${chapterNumber}/`);
        setChapter(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching chapter:', error);
        alert('Something went wrong');
      }
    };

    getChapter();
  }, [bookId, chapterNumber]);

  const renderContentWithClickableWords = () => {
    if (!chapter.content) return null;
  
    const words = chapter.content.split(/\s+/);
    const verseNumbers = words.map((word, index) => findVerseNumber(chapter.content, word, index)).filter(Boolean);
  
    return (
      <div>
         {words.map((word, index) => {
        const isVerseNumber = /\[\d+\]/.test(word);
        if (isVerseNumber) {
          return <span key={index}>{`${word} `}</span>;
        }

        return (
          <Link
            key={index}
            to={`/word/${word}/?book=${bookId}&chapter=${chapterNumber}&verse=${verseNumbers[index]}`}
            className="clickable-word"
            onClick={(e) => handleWordClick(e, word, index)} 
          >
            {`${word} `}
          </Link>
         
        );
      })}
    </div>
  );
};
        {/* {words.map((word, index) => (
          
          <Link
            key={index}
            to={`/word/${word}/?book=${bookId}&chapter=${chapterNumber}&verse=${verseNumbers[index]}`}
            className="clickable-word"
            onClick={(e) => handleWordClick(e, word, index)}
          >
            {`${word} `}
          </Link>
        ))}
      </div>
    );
  }; */}
  
  
  // const renderContentWithClickableWords = () => {
  //   if (!chapter.content) return null;

  //   const words = chapter.content.split(' ');

  //   return (
  //     <div>
  //       {words.map((word, index) => (
  //         <Link
  //           key={index}
  //           to={`/word/${word}/?book=${bookId}&chapter=${chapterNumber}&verse=${findVerseNumber(chapter.content, word, index)}`} 
  //           className="clickable-word"
  //           onClick={(e) => handleWordClick(e, word, index)}
  //         >
  //           {`${word} `}
  //         </Link>
  //       ))}
  //     </div>
  //   );
  // };


  const handleTranslation = () => {
    navigate('translation/');
  };

  return (
    <div>
      {isLoading ? (<Loader />) : (    
    <Row className='chapterPage'>
      <h2 style={{ marginTop: "20vh", marginBottom:'0vh', marginLeft:'45vw'}}>{chapter.reference}</h2>
      <Button style={{width:'200px', height:'40px', marginTop:'5vh', marginBottom: '5vh', background:'beige', marginLeft:'40vw'}} onClick={handleTranslation}>See English Text</Button>
      <p style={{fontSize: "20px", margin: '5px', color: 'black', marginLeft: '2vw'}}>
      {renderContentWithClickableWords()}
      </p>
    </Row>
  )}
    </div>
  );
};

export default ChapterPage;




