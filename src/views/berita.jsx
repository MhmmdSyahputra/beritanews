import React from 'react'
import CardBerita2 from "../components/cardBerita2";
import axios from 'axios'
import { useEffect } from "react";
import { useState } from "react";
import ColumnRight from "../components/columnRight";
import parse from 'html-react-parser';
import Skeleton from "@mui/material/Skeleton";
import { useParams } from 'react-router-dom';

const Berita = () => {
  const [berita, setBerita] = useState()
  const [kategori, setKategori] = useState('ALL')
  const [kategories, setKategories] = useState()
  const [loading, setLoading] = useState(true)

  const params = useParams();
  const id = params.id
  // const [idcate, setidcate] = useState()


  useEffect(() => {
    if (id !== null) {
      axios.
      get(`http://localhost:3003/category/${id}`)
      .then((res) => {
        const news = res.data;
        setBerita(news);
        setLoading(false)
      })
    }
  }, [])
  

  useEffect(() => {
    axios.
      get(`http://localhost:3003/news/`)
      .then((res) => {
        const news = res.data;
        setBerita(news);
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    axios.
      get(`http://localhost:3003/category/`)
      .then((res) => {
        const categories = res.data;
        setKategories(categories);
      })
  }, [])

  useEffect(() => {
    axios.
      get(`http://localhost:3003/news/cate/${kategori}`)
      .then((res) => {
        const news = res.data;
        setBerita(news);
        setLoading(false)
      })
  }, [kategori])


  return (
    <>
      <div className="container-fluid mt-4 ">
        <div className="row justify-content-around">
          <div className="col-8 p-3" style={{ backgroundColor: "#FFFFFF" }}>

            {/* Berita Sumut */}
            

              <div
                className="col-md-8 subtitle mb-4" >
                <h2 className="fw-bold">{kategori} </h2>
              </div>

              <div className="">
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
                  <div className="row">
                    {
                      berita && berita.map((databerita,index) => (
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