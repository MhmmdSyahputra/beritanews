import React from 'react'
import CKEditor from "react-ckeditor-component";
import { useState } from 'react';
import { TagsInput } from "react-tag-input-component";
import axios from 'axios';
import Skeleton from "@mui/material/Skeleton";
import { useEffect } from "react";
import { API_URL } from '../utils/constans'

const Addnews = () => {

    const [idberita, setIdberita] = useState()
    const [judul, setJudul] = useState('')
    const [contentnews, setContentnews] = useState('')
    const [kategori, setKategori] = useState()
    const [tags, setTags] = useState([]);
    const [berita, setBerita] = useState()
    const [loading, setLoading] = useState(true)
    const [update, setUpdate] = useState(false)

    const [kategories, setKategories] = useState()

    // AMBIL DATA CATEGORI SAAT HALAMAN PERTAMA KALI DI LOAD 
    useEffect(() => {
        axios.
            get(API_URL + `category/`)
            .then((res) => {
                const categories = res.data;
                setKategories(categories);
                setLoading(false);
            })
    }, [])

    const loadData = () => {
        axios.
            get(API_URL + 'news/')
            .then((res) => {
                const news = res.data;
                setBerita(news);
                // JIKA DATA SUDAH DAPAT MAKA SET LOADING MENJADI FALSE
                setLoading(false);
            })
    }

    const setValueEmpty = () => {
        setUpdate(false)
        setJudul('')
        setContentnews('')
        setKategori('')
        setTags([])
        setIdberita('')
    }

    // AMBIL SEMUA DATA BERITA SAAT HALAMAN PERTAMA KALI DI LOAD
    useEffect(() => {
        axios.
            get(API_URL + 'news/')
            .then((res) => {
                const news = res.data;
                setBerita(news);
                // JIKA DATA SUDAH DAPAT MAKA SET LOADING MENJADI FALSE
                setLoading(false);
            })
    }, [])


    const deleteNews = (id) => {
        axios
            .delete(API_URL + `news/${id}`)
            .then(() => {
                alert('data dihapus')
                loadData()
                setValueEmpty()
            })
    }


    const simpan = () => {
        if (update == true) {
            const img = contentnews.slice(contentnews.indexOf(`src="`) + 5, contentnews.indexOf(`style="`) - 2)
            axios
                .put(API_URL + `news/${idberita}`, {
                    judul: judul,
                    kategori: kategori,
                    gambarberita: img,
                    isiBerita: contentnews,
                    tag: tags,
                })
                .then(function (response) {
                    alert('data berhasil diupdate')
                    loadData()
                    setValueEmpty()
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            if (judul == '' || kategori == '' || contentnews == '' || tags == '') {
                
                alert('Gagal! Data Masih Ada yang Kosong')
                
            }else{
                const img = contentnews.slice(contentnews.indexOf(`src="`) + 5, contentnews.indexOf(`style="`) - 2)
                axios
                    .post(API_URL + 'news/', {
                        judul: judul,
                        kategori: kategori,
                        gambarberita: img,
                        isiBerita: contentnews,
                        tag: tags,
                    })
                    .then(function (response) {
                        alert('data berhasil ditambah')
                        loadData()
                        setValueEmpty()
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }

    const getNews = (id, judul, isi, kategori, tags) => {
        setUpdate(true)
        setJudul(judul)
        setContentnews(isi)
        setKategori(kategori)
        setTags(tags)
        setIdberita(id)
    }



    return (
        <>
            <div className="container-fluid mt-4 ">
                <div className="row justify-content-around">
                    <div className="col-8 p-5" style={{ backgroundColor: "#FFFFFF" }}>
                        <h2 className=''>{update ? 'Update' : 'Tambah'} Berita</h2>
                        <div className='text-end'>{update ? (
                            <button type='button' onClick={() => deleteNews(idberita)} className='btn btn-danger'>Hapus</button>
                        ) : ''}</div>
                        <div className="mt-5 form-news">

                            <div className="judul mt-3">
                                <div className="fs-5 fw-bold">Judul</div>
                                <input type="text" value={judul} onChange={(e) => setJudul(e.target.value)} className='form-control' />
                            </div>

                            <div className="kategori mt-3">
                                <div className="fs-5 fw-bold">Kategori</div>
                                <select value={kategori} onChange={(e) => setKategori(e.target.value)} className='form-control'>
                                    <option value="" selected disabled hidden>Choose here</option>
                                    {
                                        kategories && kategories.map((cates)=>(
                                            <option>{cates.nameKategory}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className="content mt-3">
                                <div className="fs-5 fw-bold">Body</div>
                                <CKEditor
                                    content={contentnews}
                                    events={{
                                        "change": (e) => setContentnews(e.editor.getData())
                                    }}
                                />

                                {/* <textarea
                                        // editor={classicEditor}
                                        value={contentnews}
                                        onChange={(e) => setContentnews(e.target.value)}
                                    ></textarea> */}
                            </div>

                            <div className="tags mt-3">
                                <div className="fs-5 fw-bold">Tags</div>
                                <TagsInput
                                    value={tags}
                                    onChange={setTags}
                                    name="fruits"
                                    placeHolder="enter fruits"
                                />
                                <em>press enter or comma to add new tag</em>
                            </div>

                            <div className="content mt-3 ">
                                <button className="btn btn-success fw-bold" onClick={() => simpan()} style={{ width: '100%', height: '50px' }}>
                                    {update ? 'Update' : 'Tambah'}
                                </button>
                            </div>

                        </div>

                    </div>

                    {/* Column Right */}
                    <div className="col-3" style={{ backgroundColor: "#FFFFFF" }}>
                        <div
                            className="subtitle ms-3 mb-4">
                            <h5 className="fw-bold">All</h5>
                        </div>

                        <div className="row">

                            {
                                loading ? (
                                    // ------THIS SKELETON AT LOADING
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="row">

                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-5">
                                                            <Skeleton variant="rectangular" width='100%' height={100} className='mb-2' />
                                                        </div>

                                                        <div className="col">
                                                            <Skeleton variant="rectangular" width='100%' height={20} className='mb-2' />
                                                            <Skeleton variant="rectangular" width='50%' height={20} className='mb-2' />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-5">
                                                            <Skeleton variant="rectangular" width='100%' height={100} className='mb-2' />
                                                        </div>

                                                        <div className="col">
                                                            <Skeleton variant="rectangular" width='100%' height={20} className='mb-2' />
                                                            <Skeleton variant="rectangular" width='50%' height={20} className='mb-2' />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-5">
                                                            <Skeleton variant="rectangular" width='100%' height={100} className='mb-2' />
                                                        </div>

                                                        <div className="col">
                                                            <Skeleton variant="rectangular" width='100%' height={20} className='mb-2' />
                                                            <Skeleton variant="rectangular" width='50%' height={20} className='mb-2' />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-5">
                                                            <Skeleton variant="rectangular" width='100%' height={100} className='mb-2' />
                                                        </div>

                                                        <div className="col">
                                                            <Skeleton variant="rectangular" width='100%' height={20} className='mb-2' />
                                                            <Skeleton variant="rectangular" width='50%' height={20} className='mb-2' />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-5">
                                                            <Skeleton variant="rectangular" width='100%' height={100} className='mb-2' />
                                                        </div>

                                                        <div className="col">
                                                            <Skeleton variant="rectangular" width='100%' height={20} className='mb-2' />
                                                            <Skeleton variant="rectangular" width='50%' height={20} className='mb-2' />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                ) : (
                                    // JIKA LOADING SUDAH FALSE MAKA TAMPILKAN SEMUA BERITA
                                    berita && berita
                                    .reverse()
                                    .map((databerita, index) => (
                                        <div className="row mb-3"
                                            onClick={() => getNews(databerita._id, databerita.judul, databerita.isiBerita, databerita.kategori, databerita.tag)}
                                        >

                                            <div className="col-md-5 ">
                                                <img
                                                    src={databerita.gambarberita}
                                                    alt=""
                                                    width="930"
                                                    className="img-fluid"
                                                />
                                            </div>

                                            <div className="col-md-7 ps-1">
                                                <div className="text-dark fw-bold" style={{ fontSize: '0.78em' }}>
                                                    {databerita.judul}
                                                </div>

                                            </div>
                                        </div>
                                    ))
                                )
                            }
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Addnews