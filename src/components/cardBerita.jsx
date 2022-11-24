import React from "react";
import { useNavigate } from 'react-router-dom';

const CardBerita = ({id, judul}) => {

  let navigate = useNavigate();
  const jalan = (id) => {
    navigate("/berita/" + id);
  }
  return (
    <>
        <div onClick={() => jalan(id)} className="col-md-4">
          <div className="card text-light">
            <img
              src="https://cdn.discordapp.com/attachments/999546779882233869/1038846087244566568/image.png"
              alt=""
              width="250"
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
