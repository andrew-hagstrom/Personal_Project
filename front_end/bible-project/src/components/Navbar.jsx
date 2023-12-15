import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";
import { userapi } from "../utilities";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';

export const Navbar = ({user, setUser}) => {

    const logout = async() => {
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
    return (
        <Row className='navbar align-items-center'>
            <Link to="/">Home</Link>
            <Link to="wordbank">Word Bank</Link>
            {user && user.name && <span style={{ marginRight: '10px' }}>{user.name}</span>}
            <Form className='dropdown'>
                <Form.Group controlId='bookSelect' className='mr-2'>
                    <Form.Control as='select' onChange={''}>
                        <option value=''>Select Book</option>
                        {/* Add book options */}
                    </Form.Control>
                </Form.Group>
                    <Form.Group controlId='chapterSelect' className='mr-2'>
                        <Form.Control as='select' onChange={''}>
                            <option value=''>Select Chapter</option>
                            {/* Add chapter options */}
                        </Form.Control>
                    </Form.Group>
                <Form.Group controlId='verseSelect' className='mr-2'>
                    <Form.Control as='select' onChange={''}>
                        <option value=''>Select Verse</option>
                        {/* Add verse options */}
                    </Form.Control>
                </Form.Group>
             </Form>
        <Button onClick={logout}>Logout</Button>
        </Row>
    )
}

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function NavBar() {
//   return (
//     <Navbar expand="lg" className="navbar">
//       <Container>
//         <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="chapter">Chapter</Nav.Link>
//             <Nav.Link href="wordbank">Word Bank</Nav.Link>
//             <Nav.Link href="logout">Logout</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;

