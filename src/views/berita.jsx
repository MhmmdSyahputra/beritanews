import React from 'react'
import CardBerita2 from "../components/cardBerita2";
import axios from 'axios'
import Carousel from "../components/carousel";
import { useEffect } from "react";
import { useState } from "react";
import ColumnRight from "../components/columnRight";
import parse from 'html-react-parser';
import Skeleton from "@mui/material/Skeleton";

const Berita = () => {
  const [berita, setBerita] = useState()
  const [kategori, setKategori] = useState('ALL')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.
      get(`http://localhost:3003/news/cate/${kategori}`)
      .then((res) => {
        const news = res.data;
        // console.log(res.data);
        setBerita(news);
        setLoading(false)
      })
  }, [kategori])

  useEffect(() => {
    axios.
      get(`http://localhost:3003/news/`)
      .then((res) => {
        const news = res.data;
        // console.log(res.data);
        setBerita(news);
        setLoading(false)
      })
  }, [])
  return (
    <>
      <div className="container-fluid mt-4 ">
        <div className="row justify-content-around">
          <div className="col-8 p-3" style={{ backgroundColor: "#FFFFFF" }}>

            {/* Berita Sumut */}
            <div className="row mt-3 mb-5">

              <div
                className="col-md-7 subtitle mb-4" >
                <h2 className="fw-bold">{kategori} </h2>
              </div>

              <div className="col-md-5 mb-3 ms-auto" style={{ color: '#3E3E3E' }}>
                <h5>

                  <select value={kategori} onChange={(e) => setKategori(e.target.value)} className='form-control'>
                    <option value="" selected="selected" hidden="hidden">---Kategori</option>
                    <option value='Teknologi'>Teknologi</option>
                    <option value='Ekonomi'>Ekonomi</option>
                    <option value='Hukum'>Hukum</option>
                    <option value='Bola'>Bola</option>
                    <option value='Kesehatan'>Kesehatan</option>
                    <option value='Politik'>Politik</option>
                    <option value='Otomotif'>Otomotif</option>
                  </select>
                </h5>
              </div>

            </div>
            {
              loading ? (
                
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
                : (
                  
                  <div className="row">
                    {
                      berita && berita.map((databerita) => (
                        <CardBerita2 id={databerita._id} gambar={databerita.gambarberita} size='20px' judul={databerita.judul} content={parse(databerita.isiBerita.substring(databerita.isiBerita.indexOf(`style="`) + 40, 400))} key={databerita._id} />
                        // <CardBerita data={databerita} key={databerita._id} />

                      ))
                    }
                  </div>
                )
            }



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