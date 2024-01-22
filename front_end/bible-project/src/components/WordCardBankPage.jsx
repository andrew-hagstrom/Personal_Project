import axios from 'axios';
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function WordCardBank({id, word, bookId, chapterNumber, verseNumber, morphology, favorites, setFavorites }) {
  const [isFavorite, setIsFavorite] = useState(true);


  const RemoveWord= async () => {
    try {
      let token = localStorage.getItem("token")
      axios.defaults.headers.common['Authorization'] = `Token ${token}`;
      const response = await axios
      .delete(`http://127.0.0.1:8000/api/v1/word/${word}/`)
      console.log("Word removed successfully:", response.data)
    } catch (error) {
      console.error('Error removing word:', error);
    }
  };

  const removeFavorite = () => {
    setFavorites(favorites.filter((favorite) => favorite.id !== id));
    setIsFavorite(false);
    RemoveWord()
    window.location.reload();
  };
    



  const inFavorites = () => {
    return favorites.filter((favorite) => favorite.id === id);
  };

  useEffect(() => {
    if (inFavorites().length) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, []);

  return (
    <Card style={{ width: "18rem", margin: "1vmin", backgroundColor: "tan"}}>
      <Card.Body>
        <Card.Title style={{fontSize:'20px',fontWeight:'bold', color:'forestgreen'}}>{word}</Card.Title>
        <Card.Text>Reference: {bookId} {chapterNumber}:{verseNumber} <br/> Morphology: {morphology}</Card.Text>
        <Button
          style={{color:'red'}}
          variant="warning"
          onClick={() => {removeFavorite()}}>
          {"Remove from Word Bank"}
        </Button>
      </Card.Body>
    </Card>
    
  );
}

export default WordCardBank;
