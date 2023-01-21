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

  const [namaakun, setNamaAkun] = useState('')
  const [comentar, setComentar] = useState('')



  const getDayNews = (data) => {
    const dateString = data
    const [year, month, day] = dateString.split("-");
    const date = new Date(year, month - 1, day);
    const dayOfWeek = date.getDay();

    if (dayOfWeek == 0) {
      return 'Minggu'
    } else if (dayOfWeek == 1) {
      return 'Senin'
    } else if (dayOfWeek == 2) {
      return 'Selasa'
    } else if (dayOfWeek == 3) {
      return 'Rabu'
    } else if (dayOfWeek == 4) {
      return 'Kamis'
    } else if (dayOfWeek == 5) {
      return 'Jumat'
    } else if (dayOfWeek == 6) {
      return 'Sabtu'
    }

  }

  useEffect(() => {
    document.title = "Detail"
  }, []);

  const kirimComent = (e) => {
    e.preventDefault()
    axios.
      post(API_URL + `news/${id}/komentar`, {
        nama: namaakun,
        isiKomentar: comentar,
      })
    
    setNamaAkun('')
    setComentar('')
  }

  // MENGAMBIL DATA BERITA BERDASARKAN ID YG TERDAPAT DI URL TADI 
  const GetBerita = () => {
    axios.
      get(API_URL + `news/${id}`)
      .then((res) => {
        const news = res.data;
        setBerita(news);
      })
  }

  useEffect(() => {
    GetBerita() 
  }, [kirimComent])
  

  useEffect(() => {
    GetBerita()
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
                    {data.kategori} | {getDayNews(data.tglCreate.slice(0, 10))} | {data.tglCreate.slice(0, 10)} | {data.tglCreate.slice(12, 19)}
                    <br />
                    <i className="fa-solid fa-eye"></i> {data.tayang}x Dilihat
                  </div>

                  <div className="content">
                    {parse(data.isiBerita)}
                  </div>


                </div>
              ))
            }

            <hr />

            <div className="diskusi">
              <h3 className='mb-3'>Berikan Comentar</h3>

              <div className="col-md-5">

                <form onSubmit={kirimComent}>
                  <div className="mb-3">
                    <label className="form-label">Nama</label>
                    <input type="text" className="form-control" value={namaakun} onChange={e => { setNamaAkun(e.target.value) }} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Pesan</label>
                    <textarea className="form-control" value={comentar} onChange={e => { setComentar(e.target.value) }} rows="3"></textarea>
                  </div>
                  <div className="mb-3">
                    <button className='btn btn-success'>Submit</button>
                  </div>
                </form>

              </div>

              <div className="allComent">
                <h4> Isi Diskusi</h4>
                <div className="row">
                  {
                    berita && berita.map((databerita, indexberita) => (
                      databerita.komentar && databerita.komentar.reverse().map((datacoment, indexcoment) => (
                        <div className="col-md-12 p-4 my-3" style={{ background: '#cfcfcf', borderTopRightRadius: '50px', borderBottomLeftRadius:'50px',borderBottomRightRadius:'50px' }}>
                          <div className="nameakun fw-bold">
                            {datacoment.nama}
                          </div>
                          <div className="isiComent">
                            {datacoment.isiKomentar}
                          </div>
                          <div className="time text-end">
                            {datacoment.tglKomentar.slice(0,21)}
                          </div>

                        </div>
                      ))
                    ))
                  }

                </div>
              </div>
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

export default Detailberita