import { useState } from "react";
import { api } from "../utilities";
import { useNavigate, useLocation } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {setUser} = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await api.post("v1/users/login/", {
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
  };

  const handleSignupClick = () => {
    navigate("/signup/"); 
  };

  return (
    <div className = "login">
    <Row >
      <Form onSubmit={handleLogin}>
        <h2>Login</h2>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
        </Form.Group>
        <Button type="submit">Log In</Button>
        <Button variant="secondary" onClick={handleSignupClick}>
          Sign Up
        </Button>
      </Form>
    </Row></div>
  );
};

export default LoginPage;

