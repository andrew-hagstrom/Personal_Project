// import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { api } from "../utilities";

function WordCard({id, word, morphology, revBookId, bookId, chapterNumber, verseNumber, morphologyLoaded, favorites, setFavorites }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const AddWord = async () => {
    try {
      let data = 
      {
        morphology:morphology,
        bookId: bookId,
        chapterNumber: chapterNumber,
        verseNumber: verseNumber
      }
      let token = localStorage.getItem("token")
      api.defaults.headers.common['Authorization'] = `Token ${token}`;
      const response = await api
      .post(`word/${word}/`, data
      );
      console.log("Word added successfully:", response.data)
    } catch (error) {
      console.error('Error adding word:', error);
    }
  };

  const RemoveWord= async () => {
    try {
      let token = localStorage.getItem("token")
      api.defaults.headers.common['Authorization'] = `Token ${token}`;
      const response = await api
      .delete(`word/${word}/`)
      console.log("Word removed successfully:", response.data)
    } catch (error) {
      console.error('Error removing word:', error);
    }
  };

  const removeFavorite = () => {
    setFavorites(favorites.filter((favorite) => favorite.id !== id));
    setIsFavorite(false);
    RemoveWord()};

  const addToFavorites = () => {
    setFavorites([...favorites, { id, word, morphology, bookId, chapterNumber, verseNumber }]);
    setIsFavorite(true);
    AddWord()};

  const inFavorites = () => {
    return favorites.filter((favorite) => favorite.id === id);
  };

  useEffect(() => {
    if (inFavorites().length) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favorites]);

  return (
    <div style={{ justifyContent:'center', marginLeft: '40vw'}}>
    <Card style={{ width: "18rem", margin: "1vmin", backgroundColor: "tan"}}>
      <Card.Body>
        <Card.Title style={{fontSize:'20px',fontWeight:'bold', color:'green'}}>{word}</Card.Title>
        <Card.Text>Reference: <Link to={`https://morph-master.com/${bookId}/chapter/${chapterNumber}/verse/${verseNumber}/`}>{revBookId} {chapterNumber}:{verseNumber}</Link><br/> Morphology: {morphology}</Card.Text>
        <Button
          variant="warning"
          onClick={() => {
            isFavorite ? removeFavorite() : addToFavorites();}}
            disabled={!morphologyLoaded}
            >
          {isFavorite ? "Remove from Word Bank" : "Add to Word Bank"}
        </Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default WordCard;





