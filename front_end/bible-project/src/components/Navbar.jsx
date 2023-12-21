import Row from "react-bootstrap/esm/Row";
import { Link, useParams } from "react-router-dom";
import { userapi } from "../utilities";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import { useNavigate} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Navbar = ({user, setUser}) => {
     const navigate = useNavigate(); 
     const [chapters, setChapters] = useState([]);
     const [selectedChapter, setSelectedChapter] = useState('');
     const [verses, setVerses] = useState([]);
     const [selectedVerses, setSelectedVerses] = useState('');
     const { chapterNumber } = useParams();


    const logout = async() => {
        navigate('login/');
        window.location.reload();
        let response = await userapi.post('logout/')
        if (response.status == 204) {
            localStorage.removeItem('token')
            localStorage.removeItem('email')
            setUser(null)
            delete userapi.defaults.headers.common['Authorization']
           
        } else {
            console.log("There was an error. Please try again.")
        }
    }

    useEffect(() => {
        const GetVerses = async() => {
            try {
                let token = localStorage.getItem("token")
                axios.defaults.headers.common['Authorization'] = `Token ${token}`;
                const allVerses = [];
                for (let chapterNumber = 1; chapterNumber <= 24; chapterNumber++) {
                    const response = await axios.get(`http://127.0.0.1:8000/api/v1/chapter/${chapterNumber}/verses/`)
                    allVerses.push(...response.data);
                }
                setVerses(allVerses) 
            } catch (error) {
                console.log(error)
          
            }  
        }

             GetVerses(); 
      
        }, []);
    
       
        // const handleVerseChange = (e) => {
        //     setSelectedVerses(e.target.value)
        //     navigate( `/chapter/${e.target.value}/verse/${e.target.value}/`);
        // }

        const handleVerseChange = (e) => {
            const verseValue = e.target.value;
            const [chapter, verse] = verseValue.split('.').slice(1); 
            navigate(`/chapter/${parseInt(chapter)}/verse/${parseInt(verse)}`);
        }


    useEffect(() => {
        const GetChapters = async() => {
            try {
                let token = localStorage.getItem("token")
                axios.defaults.headers.common['Authorization'] = `Token ${token}`;
                const response = await axios.get('http://127.0.0.1:8000/api/v1/chapter/')
                setChapters(response.data)
                console.log(data);   
            } catch (error) {
          
            }
       
        };

        GetChapters(); 
        }, []);

    
    const handleChapterChange = (e) => {
        setSelectedChapter(e.target.value)
        navigate(`/chapter/${e.target.value}/`);
    }


    
    return (
        <Row className='navbar'>
            <h3 style={{color:'green'}}>HellaMorph</h3>
            <Link to="/">Home</Link>
            <Link to="wordbank/">Word Bank</Link>
            <Form className='dropdown'>
                {/* <Form.Group controlId='bookSelect' className='mr-2'>
                    <Form.Control as='select' onChange={''}>
                        <option value=''>Select Book</option>
                    </Form.Control>
                </Form.Group> */}
                    <Form.Group controlId='chapterSelect' className='mr-2'>
                        <Form.Control as='select' value={selectedChapter} onChange={handleChapterChange}>
                            <option value=''>Look Up by Chapter</option>
                            {chapters.map((chapter) => (
                                <option key={chapter.number} value={chapter.number}>
                                   {chapter.id}
                                </option>
                           ))}
                        </Form.Control>
                    </Form.Group>
                <Form.Group controlId='verseSelect' className='mr-2'>
                    <Form.Control as='select' value={selectedVerses} onChange={handleVerseChange}>
                        <option value=''>Look Up by Verse</option>
                        {verses.map((verse) => (
                                <option key={verse.id} value={verse.id}>
                                     {verse.id}
                                </option>
                           ))}
                    </Form.Control>
                </Form.Group>
             </Form>
             
        <Button onClick={logout}>Logout</Button>
        </Row>
    )
}



// import Row from "react-bootstrap/esm/Row";
// import { Link } from "react-router-dom";
// import { userapi } from "../utilities";
// import Button from "react-bootstrap/esm/Button";
// import Form from 'react-bootstrap/Form';
// import { useNavigate } from 'react-router-dom';


// export const Navbar = ({user, setUser}) => {
//      const navigate = useNavigate(); 

//     const logout = async() => {
//         navigate('login/');
//         window.location.reload();
//         let response = await userapi.post('logout/')
//         if (response.status == 204) {
//             localStorage.removeItem('token')
//             localStorage.removeItem('email')
//             setUser(null)
//             delete userapi.defaults.headers.common['Authorization']
           
//         } else {
//             console.log("There was an error. Please try again.")
//         }
//     }


//     return (
//         <Row className='navbar align-items-center'>
            
//             <Link to="/">Home</Link>
//             <Link to="wordbank/">Word Bank</Link>
//             <Link to='http://localhost:5173/chapter/1/'>1</Link>
//             <Link to='http://localhost:5173/chapter/2/'>2</Link>
//             <Link to='http://localhost:5173/chapter/3/'>3</Link>
//             <Link to='http://localhost:5173/chapter/4/'>4</Link>
//             <Link to='http://localhost:5173/chapter/5/'>5</Link>
//             <Link to='http://localhost:5173/chapter/6/'>6</Link>
//             <Link to='http://localhost:5173/chapter/7/'>7</Link>
//             <Link to='http://localhost:5173/chapter/8/'>8</Link>
//             <Link to='http://localhost:5173/chapter/9/'>9</Link>
//             <Link to='http://localhost:5173/chapter/10/'>10</Link>
//             <Link to='http://localhost:5173/chapter/11/'>11</Link>
//             <Link to='http://localhost:5173/chapter/12/'>12</Link>
//             <Link to='http://localhost:5173/chapter/13/'>13</Link>
//             <Link to='http://localhost:5173/chapter/14/'>14</Link>
//             <Link to='http://localhost:5173/chapter/15/'>15</Link>
//             <Link to='http://localhost:5173/chapter/16/'>16</Link>
//             <Link to='http://localhost:5173/chapter/17/'>17</Link>
//             <Link to='http://localhost:5173/chapter/18/'>18</Link>
//             <Link to='http://localhost:5173/chapter/19/'>19</Link>
//             <Link to='http://localhost:5173/chapter/20/'>20</Link>
//             <Link to='http://localhost:5173/chapter/21/'>21</Link>
//             <Link to='http://localhost:5173/chapter/22/'>22</Link>
//             <Link to='http://localhost:5173/chapter/23/'>23</Link>
//             <Link to='http://localhost:5173/chapter/24/'>24</Link>
        
//             {/* <Form className='dropdown'>
//                 <Form.Group controlId='bookSelect' className='mr-2'>
//                     <Form.Control as='select' onChange={''}>
//                         <option value=''>Select Book</option>
                    
//                     </Form.Control>
//                 </Form.Group>
//                     <Form.Group controlId='chapterSelect' className='mr-2'>
//                         <Form.Control as='select' onChange={''}>
//                             <option value=''>Select Chapter</option>
                          
//                         </Form.Control>
//                     </Form.Group>
//                 <Form.Group controlId='verseSelect' className='mr-2'>
//                     <Form.Control as='select' onChange={''}>
//                         <option value=''>Select Verse</option>
                      
//                     </Form.Control>
//                 </Form.Group>
//              </Form> */}
//         <Button onClick={logout}>Logout</Button>
        
//         </Row> 
//     )
// }