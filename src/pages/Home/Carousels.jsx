
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Navbar from '../Shared/Navbar';
import { Link } from 'react-router-dom';



const Carousels = () => {
    return (
        <>
            <div className='relative'>

                <div className='relative'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/TcKhXjb/a.png)' }}>
                                <div className="hero-overlay bg-opacity-60"></div>
                                <div className="text-neutral-content">
                                    <div className="px-2">
                                        <h1 className="mb-5 text-5xl font-bold text-white">Let's Celebrate Your <br /><span className='text-yellow-400'>Weddings</span> Party With Us</h1>
                                        <p className="mb-5 text-white">Experience the perfect blend of romance and elegance with our wedding planning services. From enchanting venues <br />to bespoke decor and flawless coordination, we ensure your special day is memorable and stress-free. <br />Let us turn your wedding dreams into reality with personalized touches and exceptional service.</p>
                                        <Link to="/online">
                                            <button className="btn border-none text-base font-medium bg-yellow-500 hover:bg-orange-500 text-white">Online Request</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/DpLvkcg/b.png)' }}>
                                <div className="hero-overlay bg-opacity-60"></div>
                                <div className=" text-neutral-content">
                                    <div className="px-2">
                                        <h1 className="mb-5 text-5xl font-bold text-white">Let's Celebrate Your <br /><span className='text-yellow-400'>Birthday</span> Party With Us</h1>
                                        <p className="mb-5 text-white">Make your birthday unforgettable with our creative and hassle-free event planning. Whether it’s an intimate gathering <br />or a grand party, we offer custom themes, exciting entertainment, and seamless execution. Let us <br />handle the details so you can enjoy a fantastic celebration filled with joy and laughter.</p>
                                        <Link to="/online">
                                            <button className="btn border-none text-base font-medium bg-yellow-500 hover:bg-orange-500 text-white">Online Request</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/0mdsSY2/c.png)' }}>
                                <div className="hero-overlay bg-opacity-60"></div>
                                <div className="text-neutral-content">
                                    <div className="px-2">
                                        <h1 className="mb-5 text-5xl font-bold text-white">Let's Celebrate Your <br /><span className='text-yellow-400'>Festival</span> Party With Us</h1>
                                        <p className="mb-5 text-white">Transform your festival into an extraordinary event with our expert planning and management. From vibrant cultural celebrations<br /> to lively music festivals, we handle everything from logistics to entertainment. Join us to create <br />a festival experience that leaves a lasting impression on every attendee.</p>
                                        <Link to="/online">
                                            <button className="btn border-none text-base font-medium bg-yellow-500 hover:bg-orange-500 text-white">Online Request</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='absolute top-0 left-0 w-full bg-black bg-opacity-50 p-4'>
                    <Navbar></Navbar>
                </div>
            </div>
        </>
    );
};

export default Carousels;

