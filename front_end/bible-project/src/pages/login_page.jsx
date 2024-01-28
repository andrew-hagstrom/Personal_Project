import { useState } from "react";
import { userapi } from "../utilities";
import { useNavigate, useLocation } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const {setUser} = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await userapi.post("/login/", {
      email: email,
      password: password,
    });

    const userEmail = response.data.email;
    const token = response.data.token;

    console.log(`login success, email: ${userEmail}, token: ${token}`);

    api.defaults.headers.common["Authorization"] = `Token ${token}`;
    localStorage.setItem("token", token);
    localStorage.setItem("email", userEmail);

    // setUser(response.data.user);
    navigate("/");
    window.location.reload();
  };

  const handleSignupClick = () => {
    navigate("/signup/"); 
  };

  return (
    <>
    
    <div className = "login">
      <h1 style={{ width: '100vw', color: 'darkgreen', fontsize: 2, marginTop: '10vh', marginBottom:'5vh'}}>MorphMaster</h1>
    <Row className="form-container">
      <Form onSubmit={handleLogin} className='login-form'>
        <h2>Login</h2>
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
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            style={{marginRight:'30px'}}
          />
        </Form.Group>
        <Button type="submit" className='login-button'>Log In</Button>
        <Button variant="secondary" onClick={handleSignupClick} className='login-button'>
          Go to Sign Up
        </Button>
      </Form>
    </Row>
    <p style={{color:'red', marginTop:'10vh'}}>
    ~"For nothing is hidden that will not be made manifest, nor is anything hidden away that will not be made known and come to light." -Luke 8:17
    </p>
    
    </div></>
  );
};

export default LoginPage;

