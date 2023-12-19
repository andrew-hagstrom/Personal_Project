
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom"
import Row from "react-bootstrap/esm/Row";
import { api } from "../utilities";
import '../App.css';
// import {userContext} from '../app';

export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const navigate = useNavigate();

    const signUp = async (e) => {
        e.preventDefault();
        navigate("/login/");
        const data = { email, password };
        const response = await api
            .post("v1/users/signup/", data)
            .catch(err => console.log(`signup err ${err}`));

        const userEmail = response.data.email; 
        const token = response.data.token;


        console.log(`signup success, email: ${userEmail}, token: ${token}`);

        api.defaults.headers.common["Authorization"] = `Token ${token}`
        localStorage.setItem("token", token);
        localStorage.setItem("email", userEmail);
        
        setUser(True)
       
       
    }

    return (
        <div className = "signup">
        <Row >
            <form onSubmit={(e)=>signUp(e)} style={{
            
      }}>
                <h2>Create User Account</h2>
                <input
                type="text"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                />
                <input
                type="text"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                />
                <input type="submit" value="Sign up"/>
            </form>
        </Row></div>
    )
}