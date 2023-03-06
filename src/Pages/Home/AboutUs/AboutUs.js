import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'


const AboutUs = () => {
    return (
        <div className="hero my-8">
            <div className="hero-content justify-between flex-col lg:flex-row">
                <div className="relative ml-2">
                    <img src={person} alt="" className="max-w-3xl w-3/5 h-full rounded-lg shadow-2xl" />
                    <img src={parts} alt="" className="max-w-sm	 absolute w-2/5 top-1/2 left-52 border-8 rounded-lg shadow-2xl " />
                </div>
                <div className='justify-start'>
                    <p className='text-xl text-orange-600'> About us</p>
                    <p className="py-3"></p>
                    <h1 className="text-5xl font-bold">We are qualified <br /> & of experience in this field</h1>
                    <p className="py-3"></p>
                    <p> There are many variations of passages of Lorem Ipsum available,<br /> but the majority have suffered <br /> alteration in some form, by injected humour,<br /> or randomised words which don't look even slightly believable. </p>
                    <p className="py-3"></p>
                    <p> the majority have suffered alteration in some form,<br /> by injected humour, or randomised words which <br /> don't look even slightly believable. </p>
                    <p className='py-3'></p>
                    <button className="btn btn-primary bg-orange-600">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;