
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { useState, useEffect, createContext } from "react";
import {Register} from "./pages/register_page";
import Home from "./pages/home_page";
import { userapi } from "./utilities";


export default function App() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const [favorites, setFavorites] = useState([])

  const getInfo = async() => {
    let token = localStorage.getItem('token') 
    if (token) {
      userapi.defaults.headers.common['Authorization']=`Token ${token}`
      let response = await userapi.get('/')
      setUser(response.data.email)
    }
  }

  useEffect(()=> {
    getInfo()
  }, [])

  useEffect(()=>{
    console.log(favorites)
  }, [favorites])

   // If the user is not logged in, navigate to the login page
  //  if (!user) {
  //   return <Navigate to="/login/" />;
  // }

  console.log(user)
  return (
     <>
    <div>
    <Container>
      <Row style={{ textAlign: "center" }}>
      </Row>
      {user ? <Navbar/>
      : <div></div>
    }
    <Outlet context={{user, setUser, favorites, setFavorites}}/>
    </Container>
    </div>
    </>
  );
}