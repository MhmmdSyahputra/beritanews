import React from "react"
import { Routes, Route, Link } from "react-router-dom";
// import Footer from "../components/Footer"
import Header from "../components/header"
import Addnews from "../views/systemNews";
import Beranda from "../views/beranda"
import Berita from "../views/berita"
import Detailberita from "../views/detailberita";
import Kategori from "../views/kategori"
import { Login } from "../views/login";
import { SignUp } from "../views/registrasi";
const Pages = () => {
  return (
    <>
      <Header />
      <Routes>

        <Route exact path='/' element={<Beranda />} />
        <Route exact path='/allBerita' element={<Berita />} />
        <Route exact path='/allBerita/:id' element={<Berita />} />
        <Route exact path='/kategori' element={<Kategori />} />
        <Route exact path='/SystemNews' element={<Addnews />} />
        <Route exact path='/berita/:id' element={<Detailberita />} />
        <Route exact path='/Login' element={<Login />} />
        <Route exact path='/signup' element={<SignUp/>} />

      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default Pages