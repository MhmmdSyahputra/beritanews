import React from 'react'
import CardBerita2 from "../components/cardBerita2";
import { useState } from 'react';
import axios from 'axios'
import { useEffect } from "react";
import KategoriComp from '../components/kategori';
import Skeleton from "@mui/material/Skeleton";
import { API_URL } from '../utils/constans'

// COMPONENT INI COMPONENT YG SELALU ADA DI SEBELAHA KANAN TIAP HALAMAN 

const ColumnRight = () => {
  const [berita, setBerita] = useState()
  const [kategories, setKategories] = useState()
  const [loading, setLoading] = useState(true)

  // SAAT HALAMAN PERTAMA KALI DI LOAD AMBIL SEMUA DATA CATEGORI YG ADA 
  useEffect(() => {
    axios.
      get(API_URL + `category/`)
      .then((res) => {
        const categories = res.data;
        setKategories(categories);
        setLoading(false);

      })
  }, [])

  // SAAT HALAMAN PERTAMA KALI DI LOAD AMBIL SEMUA DATA BERITA YG ADA 
  useEffect(() => {
    axios.
      get(API_URL + 'news/')
      .then((res) => {
        const news = res.data;
        // console.log(res.data);
        setBerita(news.sort((a, b) => b.tayang - a.tayang));
        setLoading(false);
      })
  }, [])

  return (
    <>
      <div
        className="subtitle ms-3 mb-4">
        <h5 className="fw-bold">Populer</h5>
      </div>

      <div className="row">
        {
          loading ? (
            // ------THIS SKELETON AT LOADING
            <div className="row">
              <div className="col-12">
                <div className="row">

                  <div className="col-12">
                    <div className="row">
                      <div className="col-5">
                        <Skeleton variant="rectangular" width='100%' height={100} className='mb-2' />
                      </div>

                      <div className="col">
                        <Skeleton variant="rectangular" width='100%' height={20} className='mb-2' />
                        <Skeleton variant="rectangular" width='50%' height={20} className='mb-2' />
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="row">
                      <div className="col-5">
                        <Skeleton variant="rectangular" width='100%' height={100} className='mb-2' />
                      </div>

                      <div className="col">
                        <Skeleton variant="rectangular" width='100%' height={20} className='mb-2' />
                        <Skeleton variant="rectangular" width='50%' height={20} className='mb-2' />
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="row">
                      <div className="col-5">
                        <Skeleton variant="rectangular" width='100%' height={100} className='mb-2' />
                      </div>

                      <div className="col">
                        <Skeleton variant="rectangular" width='100%' height={20} className='mb-2' />
                        <Skeleton variant="rectangular" width='50%' height={20} className='mb-2' />
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="row">
                      <div className="col-5">
                        <Skeleton variant="rectangular" width='100%' height={100} className='mb-2' />
                      </div>

                      <div className="col">
                        <Skeleton variant="rectangular" width='100%' height={20} className='mb-2' />
                        <Skeleton variant="rectangular" width='50%' height={20} className='mb-2' />
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="row">
                      <div className="col-5">
                        <Skeleton variant="rectangular" width='100%' height={100} className='mb-2' />
                      </div>

                      <div className="col">
                        <Skeleton variant="rectangular" width='100%' height={20} className='mb-2' />
                        <Skeleton variant="rectangular" width='50%' height={20} className='mb-2' />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          ) : (
            // JIKA LOADING SUDAH FALSE MAKA RENDER COMPONENT cardBerita2 DENGAN MENGIRIM DATA DATA YG SUDAH DI FETCH DIATAS DAN DI BATASI DARI INDEX KE 0 SAMPAI KE 6 SAJA
            berita && berita.map((databerita,index) => (
              <CardBerita2 key={index} data={databerita} size={'0.78em'} />
            )).slice(0, 6)
          )

        }
      </div>

      <div className="mt-4 mb-3" style={{ backgroundColor: "#F0F0F0", margin: '-15px', height: '50px' }}></div>

      <div
        className="subtitle ms-3 mb-4">
        <h5 className="fw-bold">Kategories</h5>
      </div>
      <div className="row">
        {
          loading ? (
            // ------THIS SKELETON AT LOADING
            <div className="row">

              <div className="col-6">
                <Skeleton variant="rectangular" width='100%' height={100} className='mb42' />
              </div>
              <div className="col-6">
                <Skeleton variant="rectangular" width='100%' height={100} className='mb-4' />
              </div>
              <div className="col-6">
                <Skeleton variant="rectangular" width='100%' height={100} className='mb-4' />
              </div>
              <div className="col-6">
                <Skeleton variant="rectangular" width='100%' height={100} className='mb-4' />
              </div>
              <div className="col-6">
                <Skeleton variant="rectangular" width='100%' height={100} className='mb-4' />
              </div>
              <div className="col-6">
                <Skeleton variant="rectangular" width='100%' height={100} className='mb-4' />
              </div>

            </div>

          ) : (
            // JIKA LOADING SUDAH FALSE MAKA RENDER COMPONENT KATEGORI DENGAN MENGIRIMKAN DATA DATA YG SUDAH DI FETCH DIATAS TADI 
            kategories && kategories.map((resCate,index) => (
              <KategoriComp fontsize='fs-6' col='col-md-6' heightimg='130px' addclass='imgcardnews' key={index} data={resCate} />
            ))
            
          )

        }
      </div>
    </>
  )
}

export default ColumnRight