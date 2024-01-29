
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
    const {setUser} = useOutletContext()

    const signUp = async (e) => {
        e.preventDefault();
        navigate("/login/");
        let data = { email, password }
        console.log('hello')
        console.log('Request Payload:', data);
        let response = await api
            .post("users/signup/", data)
            .catch(err => console.log(`signup err ${err}`));
            console.log("Response:", response);
        
        if (response.status === 201) {
                setUser(response.data.email);
                localStorage.setItem("token", response.data.token);
                api.defaults.headers.common[
                "Authorization"
                ] = `Token ${response.data.token}`;
                navigate("/");
        } else {
                localStorage.clear()
                alert ('something happened')
        }

        
        // const userEmail = response.data.email; 
        // const token = response.data.token;


        // console.log(`signup success, email: ${userEmail}, token: ${token}`);

        // api.defaults.headers.common["Authorization"] = `Token ${token}`
        // localStorage.setItem("token", token);
        // localStorage.setItem("email", userEmail);
        
        // setUser(true)
       
       
    }

    const handleLoginClick = () => {
        navigate("/login/"); 
    };

    return (
        
        <div className = "login">
             <h1 style={{ width: '100vw', color: 'darkgreen', fontsize: 2, marginTop: '10vh', marginBottom:'5vh'}}>MorphMaster</h1>
        <Row className="form-container">
            <Form onSubmit={(e)=>signUp(e)} className='login-form'>
                <h2>Sign Up</h2>
                <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                value={email}
                 onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="name@example.com"
                />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        value={password}
                        type="password"
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                        style={{marginRight:'30px'}}
                />
                </Form.Group>
                <Button type="submit" value="Sign up" className='login-button'>Sign Up</Button>
                <Button variant="secondary" onClick={handleLoginClick} className='login-button'>Go to Login</Button>
            </Form>
        </Row>
        <p style={{color:'red', marginTop:'10vh'}}>
    ~"For nothing is hidden that will not be made manifest, nor is anything hidden away that will not be made known and come to light." -Luke 8:17
    </p>
        </div>
    )
}