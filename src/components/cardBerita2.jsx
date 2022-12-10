import React from 'react'
import { useNavigate } from 'react-router-dom';

const CardBerita2 = ({ data,size,content }) => {
    let navigate = useNavigate();
    const jalan = (id) => {
        navigate("/berita/" + id);
    }

    return (
        <>
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
                <div className="text-dark fw-bold" style={{fontSize:size}}>
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