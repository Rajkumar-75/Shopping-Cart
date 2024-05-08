import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';
import { cartContext } from './main.jsx';

function App() {
  const { cart } = useContext(cartContext);

  return (
    <>
      <Container fluid className='bg-dark position-relative'>
        <Navbar className='justify-content-end pe-5 position-sticky top-0'>
          <Nav>
            <Nav.Item className='px-3'>
              <Link className='nav-link text-white fw-bold' to="/">Home</Link>
            </Nav.Item>
            <Nav.Item className='px-3'>
              <Link className='nav-link text-white fw-bold' to="/cart">Cart</Link>
            </Nav.Item>
            <Nav.Item>
              <p className='text-white bg-danger rounded p-1 px-2 rounded-5 m-0'>{cart.length}</p>
            </Nav.Item>
          </Nav>
        </Navbar>
      </Container>

      <Outlet />
      
      <footer className='text-bg-dark p-2 text-center'>
        <h5>@Copy Rights</h5>
      </footer>
    </>
  );
}

export default App;
