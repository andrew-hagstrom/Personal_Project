
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom"
import Row from "react-bootstrap/esm/Row";
import { api } from "../utilities";
import '../App.css';
// import {userContext} from '../app';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
        
        <div className = "login">
             <h1 style={{ width: '100vw', color: 'darkgreen', fontsize: 2, marginTop: '100'}}>Gospel of Luke Greek Morphology Application</h1>
        <Row className="form-container">
            <Form onSubmit={(e)=>signUp(e)} className='login-form'>
                <Form.Label>Create User Account</Form.Label>
                <Form.Control
                type="text"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Control
                type="text"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Control type="submit" value="Sign up"/>
            </Form>
        </Row></div>
    )
}