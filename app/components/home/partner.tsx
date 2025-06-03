/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const brands = [
    {
        name: 'Shimano',
        logo: 'https://1000logos.net/wp-content/uploads/2020/09/Shimano-Logo-1990.png',
    },
    {
        name: 'Daiwa',
        logo: 'https://i.pinimg.com/474x/19/9f/3c/199f3c60413bc8e60e75860456e04ab8.jpg',
    },
    {
        name: 'Abu Garcia',
        logo: 'https://ae01.alicdn.com/kf/Sff7871d51c5746ce889e2c1aaa993ab1d.jpg',
    },
    {
        name: 'Rapala',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Rapala_Logo.svg/2560px-Rapala_Logo.svg.png',
    },
    {
        name: 'Okuma',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Okuma_Corporation_company_logo.svg/2560px-Okuma_Corporation_company_logo.svg.png',
    },
    {
        name: 'Megabass',
        logo: 'https://www.dafont.com/forum/attach/orig/3/9/390178.gif?1',
    },
    {
        name: 'Zebco',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrbUyZT71DPIWfVRXMuX4ebwG4Pnnjm7ydeg&s',
    },
];

export default function PartnerSlider() {
    return (
        <div className="w-full py-8">
            <div className='container mx-auto'>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={4}
                    loop
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                    }}
                    modules={[Autoplay]}
                >
                    {brands.map((brand) => (
                        <SwiperSlide key={brand.name}>
                            <div className="flex items-center justify-center h-24 bg-white rounded-lg p-4">
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="max-h-20 object-contain"
                                    style={{ maxWidth: 120 }}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}