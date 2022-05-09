import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import logo from '../../images/logo/logo.png';

const Header = () => {
    const [user] = useAuthState(auth);

  const handleSignOut = () =>{
    signOut(auth);
}
    return (
        <div >
            <Navbar bg="info" expand="lg">
                <Container fluid>
                <Navbar.Brand as={Link} to="/home">
  <img
        src={logo}
        width="100"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
  </Navbar.Brand>
                    <Navbar.Brand className='text-success fs-2 fw-bold' href="/home">King Of Bikes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto p-2 m-5 my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/about'>About</Nav.Link>
                            <Nav.Link as={Link} to='/contactUs'>Contact us</Nav.Link>
                            <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                            {
                                user &&
                               <Nav.Link as={Link} to='/addItems'>Add Items</Nav.Link> 

                            }
                            {
                                user && <Nav.Link as={Link} to='/manageinventory'>Manage Inventory</Nav.Link>
                            }
                            {
                                user && <Nav.Link as={Link} to='/myitems'>My Items</Nav.Link>
                            }
                            {
                               user? 
                               <button className='btn btn-link text-dark text-decoration-none' onClick={handleSignOut}>sign out</button>
                               :
                               <Nav.Link as={Link} to="/login">
                              Login
                             </Nav.Link>
                            }
                            {
                                user && <Nav.Link as={Link} to=''>{user.email.slice(0,10)}</Nav.Link>
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};
export default Header;