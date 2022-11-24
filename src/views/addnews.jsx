import React from 'react'
import { CKEditor } from 'ckeditor4-react';
import { useState } from 'react';
import { TagsInput } from "react-tag-input-component";
import axios from 'axios';

const Addnews = () => {
    const [judul, setJudul] = useState('')
    const [contentnews, setContentnews] = useState()
    const [kategori, setKategori] = useState()
    const [tags, setTags] = useState([]);

    const simpan =()=>{
        console.log(judul);
        console.log(contentnews);
        console.log(kategori);
        console.log(tags);

        axios
        .post('http://localhost:3003/news/',{
            judul: judul,
            isiBerita: contentnews,
            kategori: 'kategori',
            tags: tags,
        })
         .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
          });

    }

    return (
        <>
            <div className="container-fluid mt-4 ">
                <div className="row justify-content-around">
                    <div className="col-8 p-5" style={{ backgroundColor: "#FFFFFF" }}>
                        <h2 className='subtitle' style={{ width: '45%' }}>+ Tambah Berita Baru</h2>
                        <div className="mt-5 form-news">
                           
                                <div className="judul mt-3">
                                    <div className="fs-5 fw-bold">Judul</div>
                                    <input type="text" value={judul} onChange={(e) => setJudul(e.target.value)} className='form-control' />
                                </div>

                                <div className="kategori mt-3">
                                    <div className="fs-5 fw-bold">Kategori</div>
                                    <select value={kategori} onChange={(e) => setKategori(e.target.value)} className='form-control'>
                                        <option value="teknologi">Teknologi</option>
                                        <option value="ekonomi">Ekonomi</option>
                                        <option value="hukum">Hukum</option>
                                    </select>
                                </div>

                                <div className="content mt-3">
                                    <div className="fs-5 fw-bold">Body</div>
                                    <CKEditor
                                        // editor={classicEditor}
                                        initData={contentnews}
                                        onChange={(e) => setContentnews(e.editor.getData())}
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
                                    <button className="btn btn-success fw-bold" onClick={()=>simpan()} style={{ width: '100%', height: '50px' }}>
                                        Tambah
                                    </button>
                                </div>

                        </div>

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

export default Addnews