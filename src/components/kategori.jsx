import React from 'react'
import { useNavigate } from 'react-router-dom';

// COMPONENT INI BERISI CARD DARI KATEGORI 

const KategoriComp = ({data,addclass,fontsize,col,heightimg}) => {

  let navigate = useNavigate();

  // JIKA FUNGSI INI DIPANGGIL MAKA LEMPAR DIA KE PATH allBerita DENGAN MEBAWAKAN NAME CATEGORI DARI DATA CATEGORI 
  const jalan = (name)=>{
      navigate("/allBerita/" + name);

  }
  return (
    <>
        {/* JIKA CARD DI CLICK MAKA JALANKAN FUNGSI jalan DENGAN MELEMPARKAN NAMECATEGORI DARI DATA KATEGORI ITU */}
        <div className={"col-md-4 mb-4 " + col} onClick={() => jalan(data.nameKategory)}>
          <div className="card text-light border-0">
            <img
              src={data.gambarKategory}
              alt=""
              className={'img-fluid ' + addclass}
              style={{ height: heightimg }}
            />
            <div className="card-img-overlay d-flex align-items-center px-0">
              <h4 className={"text-light text-center flex-fill fw-bold p-2 card-title title-cate "+ fontsize}>
                {data.nameKategory}
              </h4>
            </div>
          </div>
        </div>
        
    </>
  )
}

export default KategoriComp