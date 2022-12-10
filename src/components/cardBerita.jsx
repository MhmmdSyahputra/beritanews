import React from "react";
import { useNavigate } from 'react-router-dom';

const CardBerita = ({data}) => {

  let navigate = useNavigate();
  const jalan = (id) => {
    navigate("/berita/" + id);
  }
  return (
    <>
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
