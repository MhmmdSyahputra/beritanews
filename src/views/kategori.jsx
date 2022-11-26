import React from 'react'
import ColumnRight from "../components/columnRight";
import KategoriComp from '../components/kategori';
import axios from 'axios'
import { useEffect } from "react";
import { useState } from "react";

const Kategori = () => {
  const [kategories, setKategories] = useState()
  useEffect(() => {
    axios.
      get(`http://localhost:3003/category/`)
      .then((res) => {
        const categories = res.data;
        setKategories(categories);
      })
  }, [])
  return (
    <>
      <div className="container-fluid mt-4 ">
        <div className="row justify-content-around">

          <div className="col-8 p-3" style={{ backgroundColor: "#FFFFFF" }}>
            <div
              className="subtitle mb-4">
              <h2 className="fw-bold">Kategories</h2>
            </div>
            <div className="row">
              {
                kategories && kategories.map((resCate)=>(
                  <KategoriComp addclass='imgcardnews' namacate={resCate.nameKategory} gambarcate={resCate.gambarKategory} />
                ))
              }
            </div>
          </div>

          {/* Column Right */}
          <div className="col-3 py-4 p-1 pe-0" style={{ backgroundColor: "#FFFFFF" }}>
            <ColumnRight />
          </div>

        </div>
      </div>
    </>
  )
}

export default Kategori