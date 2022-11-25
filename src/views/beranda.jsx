import React from "react";
import CardBerita from "../components/cardBerita";
import ComponentCarousel from "../components/carousel";
import axios from 'axios'
import { useEffect } from "react";
import { useState } from "react";
import ColumnRight from "../components/columnRight";
import Carousel from "react-bootstrap/Carousel";

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
                className="subtitle mb-4">
                <h2 className="fw-bold">News</h2>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-md-10 ">
                  <ComponentCarousel />
                </div>
              </div>
            </div>

            {/* Berita Sumut */}
            <div className="sumut mt-3 mb-5">
              <div
                className="subtitle mb-4">
                <h2 className="fw-bold">Teknologi</h2>
              </div>
              <div className="text-end mb-3" style={{ color: '#3E3E3E' }}>
                <h5>Selengkapnya {">"} </h5>
              </div>
              <div className="wrapper">
                {
                  berita && berita
                  .filter(databerita=>databerita.kategori == "Teknologi") 
                  .map((databerita) => (
                    <CardBerita id={databerita._id} gambar={databerita.gambarberita} judul={databerita.judul} key={databerita._id} />
                    // <CardBerita data={databerita} key={databerita._id} />

                  ))
                }
              </div>
            </div>

            {/* Berita Ekonomi */}
            <div className="ekonomi mt-3 mb-5">
              <div
                className="subtitle mb-4">
                <h2 className="fw-bold">Ekonomi</h2>
              </div>
              <div className="text-end mb-3" style={{ color: '#3E3E3E' }}>
                <h5>Selengkapnya {">"} </h5>
              </div>
              <div className="wrapper">
                {
                  berita && berita
                  .filter(databerita=>databerita.kategori == "Ekonomi") 
                  .map((databerita) => (
                    <CardBerita id={databerita._id} gambar={databerita.gambarberita} judul={databerita.judul} key={databerita._id} />
                    // <CardBerita data={databerita} key={databerita._id} />

                  ))
                }
              </div>
            </div>

            {/* Berita Otomotif */}
            <div className="otomotif mt-3 mb-5">
              <div
                className="subtitle mb-4">
                <h2 className="fw-bold">Otomotif</h2>
              </div>
              <div className="text-end mb-3" style={{ color: '#3E3E3E' }}>
                <h5>Selengkapnya {">"} </h5>
              </div>
              <div className="wrapper">
                {
                  berita && berita
                  .filter(databerita=>databerita.kategori == "Otomotif") 
                  .map((databerita) => (
                    <CardBerita id={databerita._id} gambar={databerita.gambarberita} judul={databerita.judul} key={databerita._id} />
                    // <CardBerita data={databerita} key={databerita._id} />

                  ))
                }
              </div>
            </div>

          </div>

          {/* Column Right */}
          <div className="col-3 py-4 " style={{ backgroundColor: "#FFFFFF" }}>
            <ColumnRight />
          </div>

        </div>
      </div>
    </>
  );
};

export default Beranda;
