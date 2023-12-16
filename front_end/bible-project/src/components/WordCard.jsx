import axios from 'axios';
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function WordCard({id, word, morphology, favorites, setFavorites }) {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const [wordBank_id, setWordBank_id] = useState(null)


  const removeFavorite = () => {
    setFavorites(favorites.filter((favorite) => favorite.id !== id));
    setIsFavorite(false);
  };

  const addWordData = async() => {
    let token = localStorage.getItem("token")
    axios.defaults.headers.common['Authorization'] = `Token ${token}`;
    let userresponse = await axios.get('http://127.0.0.1:8000/api/v1/wordbank/')
    setWordBank_id(userresponse.data.user.wordbank)
    if (wordBank_id != null) {
      const response = await axios
      .post(`http://127.0.0.1:8000/api/v1/wordbank/${wordBank_id}/`, word)
    }
    
  }

  const addToFavorites = () => {
    setFavorites([...favorites, { id, word, morphology }]);
    setIsFavorite(true)};
    addWordData()

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
        <Card.Title>{word}</Card.Title>
        <Card.Text>{morphology}</Card.Text>
        <Button
          variant="warning"
          onClick={() => {
            isFavorite ? removeFavorite() : addToFavorites();}}>
          {isFavorite ? "Remove" : "Add"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default WordCard;
