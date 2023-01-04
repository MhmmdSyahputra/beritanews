import React from 'react'
import { Link } from 'react-router-dom';

export const SignUp = () => {
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">

                    <div className="col-md-5 px-0 bg-light my-5 shadow" style={{borderRadius:'10px'}}>
                        <div className="fs-3 fw-bold text-light p-2 px-5" style={{ backgroundColor: '#094584',borderTopLeftRadius:'10px',borderTopRightRadius:'10px' }}>
                            Sign Up
                        </div>
                        <div className="m-4">
                            <div className="form p-5 pt-3">
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control input-login bg-light" id="floatingInput" placeholder="name@example.com"/>
                                        <label for="floatingInput">Email address</label>
                                </div>
                                <div class="form-floating mb-4">
                                    <input type="password" class="form-control input-login bg-light" id="floatingPassword" placeholder="Password" />
                                        <label for="floatingPassword">Password</label>
                                </div>

                                <button className='btn text-light mb-3' style={{ backgroundColor: '#094584', width: '100%',height: '45px', borderRadius: '30px' }}>Login</button>

                                <div className='text-center'>Already have an Account? <Link to='/login' className='text-decoration-none fw-bold'>Sign In</Link></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
