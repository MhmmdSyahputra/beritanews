import React from "react";
import CardBerita from "../components/cardBerita";
import ComponentCarousel from "../components/carousel";
import axios from 'axios'
import { useEffect } from "react";
import { useState } from "react";
import ColumnRight from "../components/columnRight";
import Skeleton from "@mui/material/Skeleton";

const Beranda = () => {

  const [berita, setBerita] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.
      get('http://localhost:3003/news/')
      .then((res) => {
        const news = res.data;
        setBerita(news);
        setLoading(false);
      })
  }, [])

  return (

    <>
      <div className="container-fluid mt-4 ">
        <div className="row justify-content-around">
          <div className="col-8 p-3" style={{ backgroundColor: "#FFFFFF" }}>
            {/* Carousel */}
              <div
                className="subtitle mb-4">
                <h2 className="fw-bold">News</h2>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-md-10 ">
                  <ComponentCarousel />
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
              <div className="wrapper px-4">
                {
                  loading ? (
                    <div className="row">
                      <Skeleton variant="rectangular" className='mx-2' width='250px' height={250} />
                      <Skeleton variant="rectangular" className='mx-2' width='250px' height={250} />
                      <Skeleton variant="rectangular" className='mx-2' width='250px' height={250} />
                    </div>
                  ) : (
                    berita && berita
                      .filter(databerita => databerita.kategori == "Teknologi")
                      .map((databerita,index) => (
                        <CardBerita key={index} data={databerita} />
                        // <CardBerita data={databerita} key={databerita._id} />

                      ))

                  )

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
              <div className="wrapper px-4">
                {
                  loading ? (
                    // ------THIS SKELETON AT LOADING
                    <div className="row">
                      <Skeleton variant="rectangular" className='mx-2' width='250px' height={250} />
                      <Skeleton variant="rectangular" className='mx-2' width='250px' height={250} />
                      <Skeleton variant="rectangular" className='mx-2' width='250px' height={250} />
                    </div>
                  ) : (
                    berita && berita
                      .filter(databerita => databerita.kategori == "Ekonomi")
                      .map((databerita,index) => (
                        <CardBerita key={index} data={databerita} />
                      ))
                  )
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
              <div className="wrapper px-4">
                {
                  // ------THIS SKELETON AT LOADING
                  loading ? (
                    <div className="row">
                      <Skeleton variant="rectangular" className='mx-2' width='250px' height={250} />
                      <Skeleton variant="rectangular" className='mx-2' width='250px' height={250} />
                      <Skeleton variant="rectangular" className='mx-2' width='250px' height={250} />
                    </div>
                  ) : (
                    berita && berita
                      .filter(databerita => databerita.kategori == "Otomotif")
                      .map((databerita,index) => (
                        <CardBerita key={index} data={databerita} />
                      ))
                  )
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
