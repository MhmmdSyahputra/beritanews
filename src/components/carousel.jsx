import React from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from 'axios'
import { useEffect } from "react";
import { useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import { API_URL } from '../utils/constans'
import { useNavigate } from 'react-router-dom';

// INI COMPONENT UNTUK MENAMPILKAN CAROUSEL 

const ComponentCarousel = () => {
  let navigate = useNavigate();
  const [berita, setBerita] = useState()

  // SET DEFAULT LOADING TRUE
  const [loading, setLoading] = useState(true)

  // KETIGA HALAMAN DI LOAD AMBIL SEMUA DATA BERITA 
  useEffect(() => {
    axios.
      get(API_URL + 'news/')
      .then((res) => {
        const news = res.data;
        // console.log(res.data);
        setBerita(news);
        setLoading(false)
      })
  }, [])

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

    <Carousel fade>
      {
        loading ? (
          // JIKA LOADING MASIH TRUE MAKA TAMPILKAN SKELETON SAJA
          <Skeleton variant="rectangular" width='100%' height={400} />
        ) : (
          // JIKA LOADING SUDAH FALSE TAMPILKAN DATA YG DIDAPAT DAN DIBATASI HANYA DATA YG INDEX KE 2,6 SAJA YG TAMPIL
          berita && berita.map((data) => (
            <Carousel.Item key={data._id} onClick={()=>jalan(data._id)}>
              <img
                className="imgcarousel d-block w-100"
                src={data.gambarberita}
                alt="First slide" height='450'
              />
              <Carousel.Caption>
                <h3>{data.judul}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          )).slice(2, 6)
          
        )
      }
    </Carousel>



  );
};

export default ComponentCarousel;
