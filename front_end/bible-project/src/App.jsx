
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { useState, useEffect, createContext } from "react";
import {Register} from "./pages/register_page";
import Home from "./pages/home_page";
import { userapi } from "./utilities";


// export const userContext = createContext();

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
      // navigate("/")
    }
  }

  useEffect(()=> {
    getInfo()
  }, [])

  useEffect(()=>{
    console.log(favorites)
  }, [favorites])

  console.log(user)
  return (
     <>
    <div>
  <h1 style={{ width: '100%', backgroundColor: 'green', color: 'gold', fontsize: 2, marginTop: '100'}}>Gospel of Luke Greek Morphology Application</h1>
    <Container>
      <Row style={{ textAlign: "center" }}>
      
      </Row>
      {/* <Navbar/> */}
      {user ? <Navbar/>
      : <div></div>
    }
    <Outlet context={{user, setUser, favorites, setFavorites}}/>
    </Container>
    </div>
   
    </>
  );
}