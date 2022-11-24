import React from "react";
import CardBerita from "../components/cardBerita";
import Carousel from "../components/carousel";
import axios from 'axios'
import { useEffect } from "react";
import { useState } from "react";


const Beranda = () => {

  const [berita, setBerita] = useState()
  
  useEffect(() => {
    axios.
      get('http://localhost:3003/news/')
      .then((res) => {
        const news = res.data;
        // console.log(res.data);
        setBerita(news);
      })
  }, [])

  // const news = berita && berita.map((databerita) => (
  //   <CardBerita data={databerita} key={databerita._id} />
  // ))

  // const { berita } = this.state
  return (
    
    <>
      <div className="container-fluid mt-4 ">
        <div className="row justify-content-around">
          <div className="col-8 p-5" style={{ backgroundColor: "#FFFFFF" }}>
            {/* Carousel */}
            <div className="carou mb-5">
              <div
                className="subtitle mb-4"
                style={{
                  borderBottom: "2px #094584 solid",
                  width: "100px",
                  color: "#094584",
                }}
              >
                <h2 className="fw-bold">News</h2>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-md-10 ">
                  <Carousel />
                </div>
              </div>
            </div>

            {/* Berita Sumut */}
            <div className="sumut mt-3 mb-5">
              <div
                className="subtitle mb-4">
                <h2 className="fw-bold">Sumut</h2>
              </div>
              <div className="text-end mb-3" style={{ color: '#3E3E3E' }}>
                <h5>Selengkapnya {">"} </h5>
              </div>
              <div className="wrapper">
                {
                  berita && berita.map((databerita) => (
                    <CardBerita id={databerita._id} gambar={databerita.gambar} judul={databerita.judul} key={databerita._id} />
                    // <CardBerita data={databerita} key={databerita._id} />
                    
                  ))
                }
              </div>
            </div>

            {/* Berita Ekonomi */}
            <div className="ekonomi mt-3 mb-5">
              <div
                className="subtitle mb-4" style={{ width: '150px' }}>
                <h2 className="fw-bold">Ekonomi</h2>
              </div>
              <div className="text-end mb-3" style={{ color: '#3E3E3E' }}>
                <h5>Selengkapnya {">"} </h5>
              </div>
              <div className="wrapper">
                {
                  berita && berita.map((databerita) => (
                    <CardBerita id={databerita._id} gambar={databerita.gambar} judul={databerita.judul} key={databerita._id} />
                    // <CardBerita data={databerita} key={databerita._id} />
                    
                  ))
                }
              </div>
            </div>

            {/* Berita Otomotif */}
            <div className="otomotif mt-3 mb-5">
              <div
                className="subtitle mb-4" style={{ width: '150px' }}>
                <h2 className="fw-bold">Otomotif</h2>
              </div>
              <div className="text-end mb-3" style={{ color: '#3E3E3E' }}>
                <h5>Selengkapnya {">"} </h5>
              </div>
              <div className="wrapper">
                {
                  berita && berita.map((databerita) => (
                    <CardBerita id={databerita._id} gambar={databerita.gambar} judul={databerita.judul} key={databerita._id} />
                    // <CardBerita data={databerita} key={databerita._id} />
                    
                  ))
                }
              </div>
            </div>

          </div>

          {/* Column Right */}
          <div className="col-3" style={{ backgroundColor: "#FFFFFF" }}>
            <div
              className="subtitle ms-3 mb-4">
              <h5 className="fw-bold">Populer</h5>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Beranda;
