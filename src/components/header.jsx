import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: '#094584' }} expand="lg" variant="dark">
      <Container className="fw-bold">
        <Navbar.Brand href="#home" className='fs-4 me-5'>NEWS MIKROSKIL</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Link to='/' className='me-4 text-decoration-none text-light'>Beranda</Link>
            <Link to='/allBerita' className='me-4 text-decoration-none text-light'>Berita</Link>
            <Link to='/kategori' className='me-4 text-decoration-none text-light'>Kategori</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header