import React from "react";
import CardBerita from "../components/cardBerita";
import CardBerita2 from "../components/cardBerita2";
import ComponentCarousel from "../components/carousel";
import axios from 'axios'
import { useEffect } from "react";
import { useState } from "react";
import ColumnRight from "../components/columnRight";
import Skeleton from "@mui/material/Skeleton";
import { API_URL } from '../utils/constans'
import parse from 'html-react-parser';

const Beranda = () => {

  const [berita, setBerita] = useState()

  // SET DEFAULT LOADING TRUE
  const [loading, setLoading] = useState(true)

  const [dosearch, setDoSearch] = useState(false)
  const [searchval, setSearchVal] = useState('')


  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setDoSearch(false);
      setSearchVal('');
    }, 10000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchval]);

  // AMBIL SEMUA DATA BERITA SAAT HALAMAN PERTAMA KALI DI LOAD
  useEffect(() => {
    axios.
      get(API_URL + 'news/')
      .then((res) => {
        const news = res.data;
        setBerita(news);
        // JIKA DATA SUDAH DAPAT MAKA SET LOADING MENJADI FALSE
        setLoading(false);
      })
  }, [])

  return (

    <>
      <div className="container-fluid mt-4 ">
        <div className="row justify-content-around">
          <div className="col-8 p-3" style={{ backgroundColor: "#FFFFFF" }}>
            {/* Carousel */}

            <div className="mb-4 row">
              <div className="col">
                <div className="subtitle">
                  <h2 className="fw-bold">News</h2>
                </div>
              </div>
              <div className="col-md-6 me-3">
                <h2 className="fw-bold text-end">
                  <div className="row">
                    <div className="col">
                      <i
                        className="fa-solid fa-magnifying-glass"
                        style={{ cursor: 'pointer', color: '#094584' }}
                        onClick={() => setDoSearch(true)}
                      ></i>
                    </div>
                    <div
                      className={dosearch ? 'col' : 'col d-none'}>
                      <input
                        type="text"
                        value={searchval}
                        onChange={(e) => setSearchVal(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>


                </h2>
              </div>
            </div>

            {
              searchval != '' ? (
                <div>
                  {
                    berita && berita
                      .filter(databerita => databerita.judul.toLowerCase().includes(searchval.toLowerCase()))
                      .map((databerita, index) => (
                        <CardBerita2 key={index} content={parse(databerita.isiBerita.substring(databerita.isiBerita.indexOf(`style="`) + 40, 400))} data={databerita} />
                      ))
                  }
                </div>

              ) : (
                <div>
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-10 ">
                      <ComponentCarousel />
                    </div>
                  </div>

                  {/* BERITA TEKNOLOGI */}
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
                        // JIKA LOADING MASIH TRUE MAKA TAMPILKAN SKELETON
                        loading ? (
                          <div className="row">
                            <Skeleton variant="rectangular" className='mx-2' width='250px' height={250} />
                            <Skeleton variant="rectangular" className='mx-2' width='250px' height={250} />
                            <Skeleton variant="rectangular" className='mx-2' width='250px' height={250} />
                          </div>
                        ) : (
                          // JIKA LOADING SUDAH FALSE MAKA TAMPILKAN DATA YG SUDAH DI DAPAT DIATAS TADI
                          berita && berita
                            .filter(databerita => databerita.kategori == "Teknologi")
                            .map((databerita, index) => (
                              <CardBerita key={index} data={databerita} />
                            ))
                        )
                      }
                    </div>
                  </div>

                  {/* BERITA EKONOMI */}
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
                            .map((databerita, index) => (
                              <CardBerita key={index} data={databerita} />
                            ))
                        )
                      }
                    </div>
                  </div>

                  {/* BERITA OTOMOTIF */}
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
                            .map((databerita, index) => (
                              <CardBerita key={index} data={databerita} />
                            ))
                        )
                      }
                    </div>
                  </div>
                </div>
              )
            }



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
