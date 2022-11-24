import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import axios from 'axios'
import { useState } from "react";
import parse from 'html-react-parser';

const Detailberita = () => {
  const params = useParams();
  const id = params.id

  const [berita, setBerita] = useState()

  useEffect(() => {
    axios.
      get(`http://localhost:3003/news/${id}`)
      .then((res) => {
        const news = res.data;
        // console.log(res.data);
        
        setBerita(news);
      })
  }, [])


  return (
    <>


      <div className="container-fluid mt-4 ">
        <div className="row justify-content-around">
          <div className="col-8 p-5" style={{ backgroundColor: "#FFFFFF" }}>


            {/* detail */}
            {
              berita && berita.map((data) => (
                <div className="sumut mt-3 mb-5" key={data._id}>
                  <div className="judul fw-bold fs-4">
                    {
                      console.log(data.isiBerita.indexOf(`src="`)+5)
                    }
                    {
                      // console.log(data.isiBerita.indexOf(`src="`)+5)
                      console.log(data.isiBerita.indexOf(`px" />`))
                      // const a = b.indexOf("a")
                      // if (a != -1){
              
                      //   console.log(a)
                      // }
                    }
                    
                    {
                      console.log(data.isiBerita.slice(data.isiBerita.indexOf(`src="`)+5,data.isiBerita.indexOf(`style="`)))
                    }
                    {parse(data.judul)}
                  </div>

                  <div className="kategori mb-4 text-muted">
                    {data.kategori} | {data.tglCreate.slice(0,10)} | {data.tglCreate.slice(12,19)}
                  </div>

                  
                  
                  <div className="content">
                  {parse(data.isiBerita)}
                  </div>


                </div>
              ))
            }

          </div>

          {/* Column Right */}
          <div className="col-3" style={{ backgroundColor: "#FFFFFF" }}>
            <div
              className="subtitle ms-3 mb-4">
              <h5 className="fw-bold">Populer</h5>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Detailberita