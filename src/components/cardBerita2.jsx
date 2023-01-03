import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { API_URL } from '../utils/constans'

//COMPONENT INI CARD CARD BERITA DENGAN BERISI GAMBAR BERITA,JUDUL DAN CONTENT NYA(TIDAKBESEMUA)

const CardBerita2 = ({ data, size, content }) => {
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
            <div className="row mb-3" onClick={() => jalan(data._id)}>

                <div className="col-md-5 ">
                    <img
                        src={data.gambarberita}
                        alt=""
                        width="930"
                        className="img-fluid"
                    />
                </div>

                <div className="col-md-7 ps-1">
                    <div className="text-dark fw-bold" style={{ fontSize: size }}>
                        {data.judul}
                    </div>

                    <div className="text-dark mt-2 fs-6">
                        {content}
                    </div>

                </div>
            </div>
        </>
    )
}

export default CardBerita2