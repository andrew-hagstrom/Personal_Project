
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from 'react-router-dom';
import '../App.css';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import WordCardBank from '../components/WordCardBankPage';
import { useOutletContext } from 'react-router-dom';
import {reverseBookId} from '../components/new_testament_books.jsx';
import { api } from "../utilities";

const WordBankPage = () => {
  const { favorites, setFavorites } = useOutletContext();
  

  useEffect(() => {
    const fetchWordBankData = async () => {
      try {
        let token = localStorage.getItem("token")
        api.defaults.headers.common['Authorization'] = `Token ${token}`;
        const response = await api.get('wordbank/');
       
        setFavorites(response.data);
        
      } catch (error) {
        console.error('Error fetching word data:', error);
      } 
    };

    fetchWordBankData();
  }, []);

  return (
    <>
    {favorites.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p style={{ alignContent: 'center', fontSize:'40px'}}>Your word bank is currently empty. Please select words in the Greek text to add to your word bank.</p>
        </div>
      ) : (
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px", 
        justifyContent: "center", 
        marginTop: '100px'
      }}>
      {favorites.map((favorite) => (
        <WordCardBank 
          key={favorite.id}
          word={favorite.word}
          bookId={favorite.bookId}
          revBookId={reverseBookId[favorite.bookId]}
          chapterNumber={favorite.chapterNumber}
          verseNumber={favorite.verseNumber}
          morphology={favorite.morphology}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      ))}</div>
      )}
    </>
  );
};

export default WordBankPage;



