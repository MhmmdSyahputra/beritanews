import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../utils/constans'
import swal from 'sweetalert';

export const SignUp = () => {
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const Signup = (e) => {
        e.preventDefault();
        
        axios
        .post(API_URL + `system/registrasi/`, {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
        })
        .then(function (response) {
            // console.log(response);

            // jika email sudah di pakai 
            if (response.data.error) {
                swal({
                  title: "Error!",
                  text: response.data.error,
                  icon: "error",
                });
                emptyvalue()
                return;
              }

            swal({
                title: "Success!",
                text: "Account Created Successfully",
                icon: "success",
              });
              emptyvalue()
            
        })
        .catch(function (error) {
            console.log(error);
        });
       
    }

    const emptyvalue = () =>{
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
    }


    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">

                    <div className="col-md-5 px-0 bg-light my-5 shadow" style={{ borderRadius: '10px' }}>
                        <div className="fs-3 fw-bold text-light p-2 px-5" style={{ backgroundColor: '#094584', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
                            Sign Up
                        </div>
                        <div className="m-4">
                            <div className="form p-5 pt-3">

                                <form onSubmit={Signup}>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control input-login bg-light" id="firsname" placeholder="Muhammad" value={firstname} onChange={e=>setFirstName(e.target.value)} />
                                                <label htmlFor="firsname">FirstName</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control input-login bg-light" id="lastname" placeholder="Syahputra" value={lastname} onChange={e=>setLastName(e.target.value)} />
                                                <label htmlFor="lastname">LastName</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control input-login bg-light" id="email" placeholder="name@example.com" value={email} onChange={e=>setEmail(e.target.value)} />
                                        <label htmlFor="email">Email address</label>
                                    </div>
                                    <div className="form-floating mb-4">
                                        <input type="password" className="form-control input-login bg-light" id="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
                                        <label htmlFor="password">Password</label>
                                    </div>

                                    <button className='btn text-light mb-3' type='submit' style={{ backgroundColor: '#094584', width: '100%', height: '45px', borderRadius: '30px' }}>Sign Up</button>

                                </form>

                                <div className='text-center'>Already have an Account? <Link to='/login' className='text-decoration-none fw-bold'>Sign In</Link></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
