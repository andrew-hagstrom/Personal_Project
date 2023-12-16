
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import '../App.css';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import WordCard from '../components/WordCard';
import { useOutletContext } from 'react-router-dom';

const WordBankPage = () => {
  const { favorites, setFavorites } = useOutletContext();

  return (
    <>
      <h2>Word Bank</h2>
      {favorites.map((favorite) => (
        <WordCard
          key={favorite.id}
          id={favorite.id}
          word={favorite.word}
          morphology={favorite.morphology}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      ))}
    </>
  );
};

export default WordBankPage;