import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import axios from 'axios'
import { useState } from "react";
import parse from 'html-react-parser';
import ColumnRight from '../components/columnRight';
import { API_URL } from '../utils/constans'


const Detailberita = () => {

  const params = useParams();
  // MENGAMBIL ID DARI URL YG DIKIRIM ----------------------------------------------------------
  const id = params.id

  const [berita, setBerita] = useState()

  const getDayNews = (data) => {
    const dateString = data
    const [year, month, day] = dateString.split("-");
    const date = new Date(year, month - 1, day);
    const dayOfWeek = date.getDay();

    if (dayOfWeek == 0) {
      return 'Minggu'
    }else if(dayOfWeek == 1){
      return 'Senin'
    }else if(dayOfWeek == 2){
      return 'Selasa'
    }else if(dayOfWeek == 3){
      return 'Rabu'
    }else if(dayOfWeek == 4){
      return 'Kamis'
    }else if(dayOfWeek == 5){
      return 'Jumat'
    }else if(dayOfWeek == 6){
      return 'Sabtu'
    }

  }

  useEffect(() => {
    document.title = "Detail"
  },[]);

  useEffect(() => {
    // MENGAMBIL DATA BERITA BERDASARKAN ID YG TERDAPAT DI URL TADI 
    axios.
      get(API_URL + `news/${id}`)
      .then((res) => {
        const news = res.data;
        setBerita(news);
      })
  }, [])

  // JIKA TERDAPAT PERUBAHAN PADA STATE ID MAKA AMBIL ULANG BERDASARKAN ID YG DI SET ULANG TADI
  useEffect(() => {
    axios.
      get(API_URL + `news/${id}`)
      .then((res) => {
        const news = res.data;
        setBerita(news);
      })
  }, [id])


  return (
    <>

      <div className="container-fluid mt-4 ">
        <div className="row justify-content-around">
          <div className="col-8 p-5" style={{ backgroundColor: "#FFFFFF" }}>


            {/* DETAIL BERITA */}
            {
              berita && berita.map((data) => (
                <div className="sumut mt-3 mb-5" key={data._id}>
                  <div className="judul fw-bold fs-4">
                    {parse(data.judul)}
                  </div>

                  <div className="kategori mb-4 text-muted">
                    {

                    }
                    {data.kategori} | {getDayNews(data.tglCreate.slice(0, 10)) } | {data.tglCreate.slice(0, 10)} | {data.tglCreate.slice(12, 19)}
                    <br />
                    <i class="fa-solid fa-eye"></i> {data.tayang}x Dilihat
                  </div>

                  <div className="content">
                    {parse(data.isiBerita)}
                  </div>


                </div>
              ))
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

export default Detailberita