import React from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { API_URL } from '../utils/constans'

//COMPONENT INI CARD CARD BERITA DENGAN BERISI GAMBAR BERITA DAN JUDUL SAJA

// MENANGKAP DATA DARI PAGE YG MEMANGGIL COMPONENT INI
const CardBerita = ({ data }) => {

  let navigate = useNavigate();

  // JIKA FUNGSI INI DIPANGGIL MAKA LEMPAR DIA KE PATH berita DENGAN MEBAWAKAN ID DARI BERITA UNTUK DITAMPILKAN DI HALAMAN DETAIL BERITA 
  const jalan = (id) => {
    axios
      .put(API_URL + `news/tayang/${id}`, {})
      .then(function (response) {
        // alert('data berhasil diupdate')
      })
      .catch(function (error) {
        console.log(error);
      });
    navigate("/berita/" + id);
  }
  return (
    <>
      {/* JIKA CARD DI CLICK MAKA JALANKAN FUNGSI jalan DENGAN MELEMPARKAN ID DARI BERITA ITU */}
      <div onClick={() => jalan(data._id)} className="col-md-4">
        <div className="card text-light border-0">
          {/* {img.map((res)=>(console.log(res)))} */}

          <img
            src={data.gambarberita}
            alt=""
            width="250"
            className="img-fluid imgcardnews"
          />
          <div className="card-img-overlay d-flex align-items-end">
            <div className="d-flex align-items-end text-light fw-bold card-title">
              {data.judul}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBerita;
