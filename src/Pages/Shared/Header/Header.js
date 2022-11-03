import React, { useState } from 'react';
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
    const [dark, setDark] = useState(false);

    console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Image src={'../../../Assets/imaiges/logo.png'}></Image>

                <Navbar.Brand className='text-primary font-weight-bold'>Code Course</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link><Link className='text-decoration-none' to='/'><Button variant="outline-info">Home</Button></Link></Nav.Link>
                        <Nav.Link><Link className='text-decoration-none' to='/courses'><Button variant="outline-info">Courses</Button></Link></Nav.Link>
                        {/* <Nav.Link><Link className='text-decoration-none' to='/FAQ'><Button variant="outline-info">FQA</Button></Link></Nav.Link> */}
                        <Nav.Link><Link className='text-decoration-none' to='/blog'><Button variant="outline-info">Blog</Button></Link></Nav.Link>

                        {/* <Nav.Link><Button variant="outline-info"><Link className='text-decoration-none' to='/courses'>Courses</Link></Button></Nav.Link>
                        <Nav.Link><Button variant="outline-info"><Link className='text-decoration-none' to='/blog'>Q/A</Link></Button></Nav.Link> */}

                    </Nav>
                    <Nav>

                        <Nav.Link href="#deets">
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button variant="dark" onClick={handleLogOut}>Log Out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>Login</Link> <small> </small>
                                        <Link to='/register'>Register</Link>
                                    </>

                            } <span> </span>

                            {
                                dark === true ? <Button onClick={() => setDark(false)} variant="dark">Light Mode</Button> : <Button onClick={() => setDark(true)} variant="dark">Dark Mode</Button>
                            }



                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {user?.photoURL ?
                                <Image style={{ height: '30px' }} roundedCircle src={user?.photo}></Image>
                                : <FaUser></FaUser>
                            } <span> </span>

                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;