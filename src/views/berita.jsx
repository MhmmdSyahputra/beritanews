import React from 'react'
import CardBerita2 from "../components/cardBerita2";
import axios from 'axios'
import Carousel from "../components/carousel";
import { useEffect } from "react";
import { useState } from "react";
import ColumnRight from "../components/columnRight";
import parse from 'html-react-parser';


const Berita = () => {
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
  return (
    <>
      <div className="container-fluid mt-4 ">
        <div className="row justify-content-around">
          <div className="col-8 p-3" style={{ backgroundColor: "#FFFFFF" }}>

            {/* Berita Sumut */}
            <div className="sumut mt-3 mb-5">
              <div
                className="subtitle mb-4">
                <h2 className="fw-bold">Sumut</h2>
              </div>
              <div className="text-end mb-3" style={{ color: '#3E3E3E' }}>
                <h5>Selengkapnya {">"} </h5>
              </div>
              <div className="row">
                {
                  berita && berita.map((databerita) => (
                    <CardBerita2 id={databerita._id} gambar={databerita.gambarberita} size='20px' judul={databerita.judul} content={parse(databerita.isiBerita.substring(databerita.isiBerita.indexOf(`style="`)+40,400))} key={databerita._id} />
                    // <CardBerita data={databerita} key={databerita._id} />

                  ))
                }
              </div>
            </div>

          </div>

          {/* Column Right */}
          <div className="col-3 py-4 p-1 pe-0" style={{ backgroundColor: "#FFFFFF" }}>
            <ColumnRight />
          </div>

        </div>
      </div>
    </>
  )
}

export default Berita