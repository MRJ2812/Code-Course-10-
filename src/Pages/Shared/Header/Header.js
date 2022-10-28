import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';



const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Code Course</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Button variant="outline-info"><Link className='text-decoration-none' to='/'>Home</Link></Button></Nav.Link>
                        <Nav.Link><Button variant="outline-info"><Link className='text-decoration-none' to='/courses'>Courses</Link></Button></Nav.Link>
                        <Nav.Link><Button variant="outline-info"><Link className='text-decoration-none' to='/blog'>Q/A</Link></Button></Nav.Link>
                        {/* <Nav.Link><Link to='/courses'>Courses</Link></Nav.Link>
                        <Nav.Link><Link to='/blog'>Q/A</Link></Nav.Link> */}

                    </Nav>
                    <Nav>

                        <Nav.Link href="#deets">
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button variant="dark" onClick={handleLogOut}>LOg Out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>Login</Link> <small> </small>
                                        <Link to='/register'>Register</Link>
                                    </>
                            }

                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {user?.photo ?
                                <Image style={{ height: '30px' }} roundedCircle src={user?.photo}></Image>
                                : <FaUser></FaUser>
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;