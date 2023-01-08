import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { API_URL } from '../utils/constans'



// COMPONENT INI BERISI HEADER DARI HALAMAN 

const Header = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()

  const admin = JSON.parse(window.localStorage.getItem("token"))

  useEffect(() => {


    if (!admin) {
      return;
    }


    console.log(JSON.parse(window.localStorage.getItem("token")));
    axios
      .post(API_URL + 'system/onlyAdmin/', {
        token: JSON.parse(window.localStorage.getItem("token"))
      }).then((data) => {
        setUsername(data.data.data.firstname + ' ' + data.data.data.lastname)
        setEmail(data.data.data.email)
        console.log('data', data.data);
      }).catch((err) => {
        console.log(err);
      })

  }, [])

  const Logout = () => {
    window.localStorage.removeItem("token");
    // window.location.replace("/login");
    window.history.pushState({}, '', '/login');
    navigate("/login");
  }

  const location = useLocation();
  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }

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
          {admin ? (
            <div className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-solid fa-user"></i>&emsp; {username}
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#" onClick={Logout}>Logout</a></li>
              </ul>
            </div>
          ) : (
            ''
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header