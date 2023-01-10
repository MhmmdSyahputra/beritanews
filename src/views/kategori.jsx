import React from 'react'
import ColumnRight from "../components/columnRight";
import KategoriComp from '../components/kategori';
import axios from 'axios'
import { useEffect } from "react";
import { useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import { API_URL } from '../utils/constans'


const Kategori = () => {
  const [kategories, setKategories] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.title = "Kategori"
  },[]);

  // AMBIL DATA CATEGORI SAAT HALAMAN PERTAMA KALI DI LOAD 
  useEffect(() => {
    axios.
      get(API_URL + `category/`)
      .then((res) => {
        const categories = res.data;
        setKategories(categories);
        setLoading(false);
      })
  }, [])

  return (
    <>
      <div className="container-fluid mt-4 ">
        <div className="row justify-content-around">

          <div className="col-8 p-3" style={{ backgroundColor: "#FFFFFF" }}>
            <div
              className="subtitle mb-4">
              <h2 className="fw-bold">Kategories</h2>
            </div>
            <div className="row">
              {
                loading ? (
                  // ------THIS SKELETON AT LOADING
                  <div className="row">

                    <div className="col-md-4">
                      <Skeleton variant="rectangular" width='100%' height={250} className='mb42' />
                    </div>
                    <div className="col-md-4">
                      <Skeleton variant="rectangular" width='100%' height={250} className='mb-4' />
                    </div>
                    <div className="col-md-4">
                      <Skeleton variant="rectangular" width='100%' height={250} className='mb-4' />
                    </div>
                    <div className="col-md-4">
                      <Skeleton variant="rectangular" width='100%' height={250} className='mb-4' />
                    </div>
                    <div className="col-md-4">
                      <Skeleton variant="rectangular" width='100%' height={250} className='mb-4' />
                    </div>
                    <div className="col-md-4">
                      <Skeleton variant="rectangular" width='100%' height={250} className='mb-4' />
                    </div>

                  </div>
                ) : (
                  // JIKA LOADING SUDAH FALSE MAKA RENDER COMPONENT KATEGORI DENGAN MEMBAWA DATADATA YG SUDAH DI FETCH 
                  kategories && kategories.map((resCate,index) => (
                    <KategoriComp addclass='imgcardnews' key={index} data={resCate} />
                  ))
                )
              }
            </div>
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

export default Kategori