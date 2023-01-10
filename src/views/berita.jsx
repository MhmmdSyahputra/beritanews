import React from 'react'
import CardBerita2 from "../components/cardBerita2";
import axios from 'axios'
import { useEffect } from "react";
import { useState } from "react";
import ColumnRight from "../components/columnRight";
import parse from 'html-react-parser';
import Skeleton from "@mui/material/Skeleton";
import { useParams } from 'react-router-dom';
import { API_URL } from '../utils/constans'


const Berita = () => {
  const [berita, setBerita] = useState()
  const [kategori, setKategori] = useState('ALL')
  const [kategories, setKategories] = useState()
  const [loading, setLoading] = useState(true)

  // MENGAMBIL DATA YG ADA DI URL JIKA ADA -------------------------------------------------------
  const params = useParams();
  const [getNameCate, setGetNameCate] = useState(params.id)

  useEffect(() => {
    document.title = "Berita"
  },[]);

  useEffect(() => {
    // JIKA DATA DI URL ADA MAKA SET KATEGORI MENJADI DATA URL ITU ---------------------------------
    if (getNameCate) {
      setKategori(getNameCate)
    }
    // JIKA DATA URL TIDAK ADA MAKA TAMPILKAN SEMUA BERITA -----------------------------------------
    else {
      axios.
        get(API_URL + `news/`)
        .then((res) => {
          const news = res.data;
          setBerita(news);
          setLoading(false)
        })
    }
  }, [])

  // MENAMPILKAN SEMUA KATEGORIES -------------------------------------------------------------------
  useEffect(() => {
    axios.
      get(API_URL + `category/`)
      .then((res) => {
        const categories = res.data;
        setKategories(categories);
      })
  }, [])

  // JIKA PADA STATE KATEGORI TERJADI PERUBAHAN MAKA CARI DATA BERITA BERDASARKAN STATE KATEGORI ITU
  useEffect(() => {
    if (kategori !== 'All') {
      axios.
        get(API_URL + `news/cate/${kategori}`)
        .then((res) => {
          const news = res.data;
          setBerita(news);
          setLoading(false)
        })
        return
    }
    axios.
        get(API_URL + `news/`)
        .then((res) => {
          const news = res.data;
          setBerita(news);
          setLoading(false)
        })
  }, [kategori])

  useEffect(() => {
    axios.
      get(API_URL + `news/cate/${getNameCate}`)
      .then((res) => {
        const news = res.data;
        setBerita(news);
        setLoading(false)
      })
  }, [getNameCate])


  return (
    <>
      <div className="container-fluid mt-4 ">
        <div className="row justify-content-around">
          <div className="col-8 p-3" style={{ backgroundColor: "#FFFFFF" }}>

            {/* LABEL CATEGORI */}
            <div
              className="col-md-8 subtitle mb-4" >
              <h2 className="fw-bold">{kategori} </h2>
            </div>

            {/* LIST CATEGORI IN BTN */}
            <div className="">
              <div className={"btn text-light m-2 fw-bold btn-primary " + (kategori == 'All' ? 'bg-primary' : '')} style={{ backgroundColor: '#094584' }} onClick={(e) => setKategori('All')}>All</div>
              {
                kategories && kategories.map((resCategories) => (
                  <div className={"btn text-light m-2 fw-bold btn-primary " + (kategori === resCategories.nameKategory ? 'bg-primary' : '')} style={{ backgroundColor: '#094584' }} onClick={(e) => setKategori(resCategories.nameKategory)}>{resCategories.nameKategory}</div>
                ))
              }
            </div>


            {
              loading ? (
                // ------THIS SKELETON AT LOADING
                <div className="row m-3">

                  <div className="col-md-5 mb-3">
                    <Skeleton variant="rectangular" width='100%' height={250} />
                  </div>
                  <div className="col-md-7">
                    <Skeleton variant="rectangular" width='100%' height={80} />
                    <br />
                    <Skeleton variant="rectangular" width='100%' height={30} className='mb-2' />
                    <Skeleton variant="rectangular" width='100%' height={30} className='mb-2' />
                    <Skeleton variant="rectangular" width='100%' height={30} className='mb-2' />
                    <Skeleton variant="rectangular" width='100%' height={30} className='mb-2' />
                  </div>


                  <div className="col-md-5 mb-3">
                    <Skeleton variant="rectangular" width='100%' height={250} />
                  </div>
                  <div className="col-md-7">
                    <Skeleton variant="rectangular" width='100%' height={80} />
                    <br />
                    <Skeleton variant="rectangular" width='100%' height={30} className='mb-2' />
                    <Skeleton variant="rectangular" width='100%' height={30} className='mb-2' />
                    <Skeleton variant="rectangular" width='100%' height={30} className='mb-2' />
                    <Skeleton variant="rectangular" width='100%' height={30} className='mb-2' />
                  </div>

                  <div className="col-md-5 mb-3">
                    <Skeleton variant="rectangular" width='100%' height={250} />
                  </div>
                  <div className="col-md-7">
                    <Skeleton variant="rectangular" width='100%' height={80} />
                    <br />
                    <Skeleton variant="rectangular" width='100%' height={30} className='mb-2' />
                    <Skeleton variant="rectangular" width='100%' height={30} className='mb-2' />
                    <Skeleton variant="rectangular" width='100%' height={30} className='mb-2' />
                    <Skeleton variant="rectangular" width='100%' height={30} className='mb-2' />
                  </div>

                </div>

              )
                :
                (
                  // MENCETAK CARDBERITA2 DENGAN MENGIRIMKAN DATA YG SUDAH DI FETCH DI ATAS
                  <div className="row">
                    {
                      berita && berita.reverse().map((databerita, index) => (
                        <CardBerita2 key={index} data={databerita} size='20px' content={parse(databerita.isiBerita.substring(databerita.isiBerita.indexOf(`style="`) + 40, 400))} />
                      ))
                    }
                  </div>
                )
            }



          </div>

          {/* Column Right */}
          <div className="col-3 py-4" style={{ backgroundColor: "#FFFFFF" }}>
            <ColumnRight />
          </div>

        </div>
      </div>
    </>
  )
}

export default Berita