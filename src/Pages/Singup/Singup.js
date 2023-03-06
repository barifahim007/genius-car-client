import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Context/AuthContext/AuthProvider';

const Singup = () => {
    const { createUser } = useContext(AuthContext)

    const handelSingup = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row py-20">
                <div className="text-center lg:text-left">
                    <img className='w-3/5' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelSingup} className="card-body">
                        <p className='text-5xl text-orange-600 text-center'>Sing Up</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
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

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Create an Account" />
                        </div>
                    </form>
                    <p className='text-center py-4'>ALready have an account? <Link className='text-xl text-orange-600 ' to='/login'>Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Singup;