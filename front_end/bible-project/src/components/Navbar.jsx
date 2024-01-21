import Row from "react-bootstrap/esm/Row";
import { Link, useParams } from "react-router-dom";
import { userapi } from "../utilities";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import { useNavigate} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {newTestamentBooks} from './new_testament_books.jsx';
import {bookId} from './new_testament_books.jsx';
import {newTestamentChaptersVerses} from './new_testament_books.jsx';

export const Navbar = ({user, setUser}) => {
     const navigate = useNavigate(); 
     const [selectedBook, setSelectedBook] = useState('');
     const [selectedChapter, setSelectedChapter] = useState('');
     const [selectedVerses, setSelectedVerses] = useState('');
     const { chapterNumber } = useParams();
     const email = localStorage.getItem('email');

    const logout = async() => {
        let response = await userapi.post('logout/')
        if (response.status == 204) {
            localStorage.removeItem('token')
            localStorage.removeItem('email')
            navigate('/login/');
            window.location.reload();
            setUser(null)
            delete userapi.defaults.headers.common['Authorization']
        } else {
            console.log("There was an error. Please try again.")
        }
         
    }

        const handleVerseChange = (e) => {
            const verseValue = e.target.value;
            const [chapter, verse] = verseValue.split('.').slice(1); 
            setSelectedVerses(e.target.value);
            navigate(`${bookId[selectedBook]}/chapter/${parseInt(chapter)}/verse/${parseInt(verse)}/`);
        }

    
    const handleChapterChange = (e) => {
        setSelectedChapter(e.target.value)
        navigate(`${bookId[selectedBook]}/chapter/${e.target.value}/`);
    }

    return (
        <Row className='navbar'>
            <h3 style={{color:'green'}}>MorphMaster</h3>
            <Link to="/">Home</Link>
            <Link to="wordbank/">Word Bank</Link>
            <Form className='dropdown'>
                <Form.Group controlId='bookSelect' className='mr-2'>
                <Form.Control as='select' onChange={(e) => setSelectedBook(e.target.value)}>
                        <option value=''>Select Book</option>
                        {newTestamentBooks.map((book, index) => (
                        <option key={index} value={book}>
                            {book}
                        </option>
                        ))}
                    </Form.Control>
                </Form.Group>
                    <Form.Group controlId='chapterSelect' className='mr-2'>
                        <Form.Control as='select' value={selectedChapter} onChange={handleChapterChange}>
                            <option value=''>Select Chapter</option>
                            {selectedBook &&
                            Array.from(Array(newTestamentChaptersVerses[selectedBook].chapters).keys()).map((chapter) => (
                                <option key={chapter + 1} value={chapter + 1}>
                                {chapter + 1}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                <Form.Group controlId='verseSelect' className='mr-2'>
                    <Form.Control as='select' value={selectedVerses} onChange={handleVerseChange}>
                        <option value=''>Select Verse</option>
                        {selectedBook &&
                        selectedChapter &&
                        Array.from(Array(newTestamentChaptersVerses[selectedBook].verses[selectedChapter]).keys()).map((verse) => (
                            <option key={verse + 1} value={`${selectedBook}.${selectedChapter}.${verse + 1}`}>
                            {verse + 1}
                            </option>
                            ))}
                    </Form.Control>
                </Form.Group>
             </Form>
            <p>Welcome, {email}!</p> 
        <Button onClick={logout}>Logout</Button>
        </Row>
    )
}

