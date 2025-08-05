'use client';
import React from 'react';
import { Card } from 'primereact/card';
import CarComponent from '@/app/components/cars/CarComponent';

const CarsListingPage = () => {

    const ourCarModels = [
        {
            Name: 'i10',
            ImageUrl: 'https://www.hyundai.com/content/dam/hyundai/tr/tr/data/vehicle-thumbnail/product/i10/small/yerli-i10-320x172.png',
            detailsUrl: './i10_details'
        },
        {
            Name: 'i20',
            ImageUrl: 'https://www.hyundai.com/content/dam/hyundai/tr/tr/data/vehicle-thumbnail/product/yeni-i20/small/yerli-i20-320x172.png',
            detailsUrl: './cars'
        },
        {
            Name: 'Bayon',
            ImageUrl: 'https://www.hyundai.com/content/dam/hyundai/tr/tr/data/vehicle-thumbnail/product/yeni-bayon/small/yerli-bayon-320x172.png',
            detailsUrl: './cars'
        },

    ]


    return (
        <div className="">
            <div className=''>
                <img
                    src="https://www.hyundai.com/content/dam/hyundai/tr/tr/images/home/2024/bayon/yeni-bayon-slider-1860x720-v2.jpg"
                    alt="Hyundai car"
                    className="w-full h-auto"
                />
            </div>
            <h4 className='mb-4 font-bold text-4xl text-blue-900 ml-8 mt-8'>Our Car Models</h4>
            <div className="grid">
                {ourCarModels.map((modelItem) => {
                    return <div className='flex'>
                        <CarComponent
                            modelName={modelItem.Name}
                            modelImageUrl={modelItem.ImageUrl}
                            detailsUrl={modelItem.detailsUrl}

                        ></CarComponent>
                    </div>
                })}
            </div>
        </div>
    );
};

export default CarsListingPage;
