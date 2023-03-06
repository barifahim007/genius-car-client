import React from 'react';

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slider1${id}`} className="carousel-item relative w-full my-20 rounded-lg">
            <div className='carusel-img'>
                <img src={image} alt='' className="w-full" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
                <h1 className='text-5xl font-bold text-white'>Affordable <br /> Price For Car <br /> Servicing</h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5  left-24  top-1/2">
                <p className='text-xl text-white'> There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2   left-24  top-2/3">
                <button className="btn btn-warning">Discover More</button>
                <button className="btn btn-outline btn-warning ml-6">Latest Project</button>

            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 bottom-5  right-5">
                <a href={`#slider${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slider${next}`} className="btn btn-circle">❯</a>
            </div>

        </div>
    );
};

export default BannerItem;