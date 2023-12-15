
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import '../App.css';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const WordPage = () => {
  const [wordData, setWordData] = useState([null]);
  const { word } = useParams();
  // const decodedGreekWord = decodeURIComponent(word);


  useEffect(() => {
    const fetchData = async () => {
      try {
        let token = localStorage.getItem("token")
        axios.defaults.headers.common['Authorization'] = `Token ${token}`;
        const response = await axios.get(`http://127.0.0.1:8000/api/v1/word/${word}/`);
        setWordData(response.data[1][1][0][2][1][0][1]);
      } catch (error) {
        console.error('Error fetching word data:', error);
      }
    };

    fetchData();
  }, [word]);

  return (
    <div className = 'cardcontainer'>
      <Card className = 'card'>
      <Card.Body>
        <Card.Title className='cardtitle'>Word:{word}</Card.Title>
        <Card.Text>
          {wordData}
        </Card.Text>
        <Button>Add to Word Bank</Button>
      </Card.Body>
    </Card></div>
  );
};

export default WordPage;




// import Row from "react-bootstrap/esm/Row";
// import { useEffect, useState } from "react";
// import axios from "axios";
// // import ReactHtmlParser from 'react-html-parser';
// import { useParams } from 'react-router-dom';
// import '../App.css';


// const WordPage = () => {
//   const [wordData, setWordData] = useState(null);
//   const { chapterNumber, verseNumber} = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/v1/chapter/' + chapterNumber +'/verse/' + verseNumber + '/words/');
//         setWordData(response.data);
//       } catch (error) {
//         console.error('Error fetching verse data:', error);
//       }
//     };

//     fetchData();
//   }, [chapterNumber, verseNumber]);

//   return (
//     <div className="verse-container">
//       <h2>Words from</h2>
//       <p>{console.log(wordData)}</p>
//       <p>{wordData}</p> 
//     </div>
//   );
// };

// export default WordPage;





// const Word = () => {
//   return (
//     <div id="home-page">
//       <h2>Word</h2>
//       <div>
//         <p>
//          Greek word displayed here.
//         </p>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. A, facere dicta nobis eos error rem minus earum ab nemo voluptates. Reprehenderit quam quidem officia dolor, error inventore. Labore, facere harum!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Word;




// import Spinner from "react-bootstrap/Spinner";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const ACharacter = () => {
//   const [character, setCharacter] = useState(null);
//   const { id } = useParams();

//   const getACharacter = async () => {
//     let response = await axios.get(
//       `https://rickandmortyapi.com/api/character/${id}`
//     );
//     setCharacter(response.data);
//   };

//   useEffect(() => {
//     getACharacter();
//   }, []);

//   return (
//     <>
//       {character ? (
//         <div id="a-character">
//           <img src={character.image} />
//           <ul>
//             <h1>{character.name}</h1>
//             <li>Species: {character.species}</li>
//             <li>Gender: {character.gender}</li>
//             <li>Origin: {character.origin.name}</li>
//             <li>Location: {character.location.name}</li>
//             <li>Created: {character.created}</li>
//           </ul>
//         </div>
//       ) : (
//         <Spinner animation="border" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </Spinner>
//       )}
//     </>
//   );
// };

// export default ACharacter;

