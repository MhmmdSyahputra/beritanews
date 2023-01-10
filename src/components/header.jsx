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
  // const [email, setEmail] = useState()

  const admin = JSON.parse(window.localStorage.getItem("token"))


  useEffect(() => {

    if (!admin) {
      return;
    }

    // console.log(token);
    axios
      .post(API_URL + 'system/getUser', {
        token: JSON.parse(window.localStorage.getItem("token")),
      }, {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': window.localStorage.getItem("token")
        }
      }).then((data) => {
        setUsername(data.data.data.firstname + ' ' + data.data.data.lastname)
        // setEmail(data.data.data.email)
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
    <>
      {
        // JIKA ADMIN TRUE MAKA TAMPILKAN HEADER UNTUK ADMIN---------------------------------------
        admin ? (
          <Navbar style={{ backgroundColor: '#094584' }} expand="lg" variant="dark">
            <Container className="fw-bold">
              <Navbar.Brand href="#home" className='fs-4 me-5'>NEWS MIKROSKIL</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto ">
                  <Link to='/SystemNews' className='me-4 text-decoration-none text-light'>Admin Page</Link>
                </Nav>
                <div className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa-solid fa-user"></i>&emsp; {username}
                  </a>
                  <ul className="dropdown-menu" style={{backgroundColor:'#094584'}} aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item text-light" href="#"><i className="fa-solid fa-address-card me-4"></i>Profile</a></li>
                    <li><a className="dropdown-item text-light" href="#"><i className="fa-solid fa-gear me-4"></i>Ubah Password</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item text-light" href="#" onClick={Logout}><i className="fa-solid fa-right-from-bracket me-4"></i>Logout</a></li>
                  </ul>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>

        // JIKA BUKAN MAKA TAMPILKAN HEADER UNTUK USER---------------------------------------
        ) : (
          <Navbar style={{ backgroundColor: '#094584' }} expand="lg" variant="dark">
            <Container className="fw-bold">
              <Navbar.Brand href="#home" className='fs-4 me-5'>NEWS MIKROSKIL</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto ">
                  <Link to='/' className='me-4 text-decoration-none text-light'><i className="fa-solid fa-house me-1"></i> Beranda</Link>
                  <Link to='/allBerita' className='me-4 text-decoration-none text-light'><i className="fa-regular fa-newspaper me-1"></i> Berita</Link>
                  <Link to='/kategori' className='me-4 text-decoration-none text-light'><i className="fa-solid fa-hashtag me-1"></i> Kategori</Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )
      }
    </>

  )
}

export default Header