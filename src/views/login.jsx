import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../utils/constans'
import swal from 'sweetalert';

export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emptyvalue = () =>{
        setEmail('')
        setPassword('')
    }

    const Masuk = (e) => {
        e.preventDefault()
        axios
            .post(API_URL + `system/login/`, {
                email: email,
                password: password,
            })
            // .then((res) => res.json())
            .then((data)=>{
                emptyvalue()
                // console.log(data);
                if (data.data.status == "error") {
                    swal({
                        title: "Error!",
                        text: data.data.message,
                        icon: "error",
                      });
                }
                if(data.data.status == "ok"){
                    swal({
                        title: "Success!",
                        text: "yey",
                        icon: "success",
                      });               
                      console.log(data.data);
                    window.localStorage('token',data.data)       
                }
            })

    }

    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">

                    <div className="col-md-5 px-0 bg-light my-5 shadow" style={{ borderRadius: '10px' }}>
                        <div className="fs-3 fw-bold text-light p-2 px-5" style={{ backgroundColor: '#094584', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
                            Login
                        </div>
                        <div className="m-4">
                            <div className="form p-5 pt-3">
                                <form onSubmit={Masuk}>

                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control input-login bg-light" id="floatingInput" placeholder="name@example.com" value={email} onChange={e=>setEmail(e.target.value)} />
                                        <label htmlFor="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating mb-4">
                                        <input type="password" className="form-control input-login bg-light" id="floatingPassword" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>

                                    <button className='btn text-light mb-3' type='submit' style={{ backgroundColor: '#094584', width: '100%', height: '45px', borderRadius: '30px' }}>Login</button>
                                </form>

                                <div className='text-center'>Don't Have an Account? <Link to='/signup' className='text-decoration-none fw-bold'>Sign Up</Link></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
