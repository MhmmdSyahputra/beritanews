import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const CardBerita = ({id, judul,gambar}) => {

  let navigate = useNavigate();
  const jalan = (id) => {
    navigate("/berita/" + id);
  }
  return (
    <>
        <div onClick={() => jalan(id)} className="col-md-4">
          <div className="card text-light">
            {/* {img.map((res)=>(console.log(res)))} */}
            
            <img
              src={gambar}
              alt=""
              width="265"
              className="img-fluid imgcardnews"
            />
            <div className="card-img-overlay d-flex align-items-end">
              <div className="text-light fw-bold card-title">
                {judul}
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default CardBerita;
