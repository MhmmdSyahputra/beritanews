import React from 'react'
import CardBerita2 from "../components/cardBerita2";
import { useState } from 'react';
import axios from 'axios'
import { useEffect } from "react";
import KategoriComp from '../components/kategori';


const ColumnRight = () => {
    const [berita, setBerita] = useState()

    useEffect(() => {
        axios.
            get('http://localhost:3003/news/')
            .then((res) => {
                const news = res.data;
                // console.log(res.data);
                setBerita(news);
            })
    }, [])

    return (
        <>
            <div
                className="subtitle ms-3 mb-4">
                <h5 className="fw-bold">Populer</h5>
            </div>

            <div className="row">
                {
                    berita && berita.map((databerita) => (
                        <CardBerita2 id={databerita._id} gambar={databerita.gambarberita} size='0.78em' judul={databerita.judul} key={databerita._id} />
                        // <CardBerita data={databerita} key={databerita._id} />

                    )).slice(0, 6)
                }
            </div>

            <div className="mt-4 mb-3" style={{ backgroundColor: "#F0F0F0", margin: '-15px', height: '50px' }}></div>

            <div
                className="subtitle ms-3 mb-4">
                <h5 className="fw-bold">Kategories</h5>
            </div>
                    <div className="row">
                        <KategoriComp fontsize='fs-6' col='col-md-6'/>
                    </div>
        </>
    )
}

export default ColumnRight