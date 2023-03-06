import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'

const Login = () => {
    const handelLogin = event => {
        event.preventDefault();
    }
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row py-20">
                <div className="text-center lg:text-left">
                    <img className='w-3/5' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelLogin} className="card-body">
                        <p className='text-5xl text-orange-600 text-center'>Loign</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center py-4'>New to Genius Car? <Link className='text-xl text-orange-600 ' to='/singup'>Sing up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;