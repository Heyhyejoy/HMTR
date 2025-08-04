'use client';
import React from 'react';
import { Card } from 'primereact/card';
import CarComponent from '@/app/components/cars/CarComponent';

const CarsListingPage = () => {

    const ourCarModels = [
        {
            Name: 'i10',
            ImageUrl: 'https://www.hyundai.com/content/dam/hyundai/tr/tr/data/vehicle-thumbnail/product/i10/small/yerli-i10-320x172.png',
            Price: '$10,000',
            detailsUrl: './i10_details'
        },
        {
            Name: 'i20',
            ImageUrl: 'https://www.hyundai.com/content/dam/hyundai/tr/tr/data/vehicle-thumbnail/product/yeni-i20/small/yerli-i20-320x172.png',
            Price: '$13,000',
            detailsUrl: './cars'
        },
        {
            Name: 'Bayon',
            ImageUrl: 'https://www.hyundai.com/content/dam/hyundai/tr/tr/data/vehicle-thumbnail/product/yeni-bayon/small/yerli-bayon-320x172.png',
            Price: '$15,000',
            detailsUrl: './cars'
        },
        {
            Name: 'Kona',
            ImageUrl: 'https://www.hyundai.com/content/dam/hyundai/tr/tr/data/vehicle-thumbnail/product/yeni-kona/default/yeni-kona--ice-672x364.png',
            Price: '$20,000',
            detailsUrl: './cars'
        }
    ]


    return (
        <div className="card">
            <h4 className='mb-4'>Our Car Models</h4>
            <div className="grid">
                {ourCarModels.map((modelItem) => {
                    return <div className='col'>
                        <CarComponent
                            modelName={modelItem.Name}
                            modelImageUrl={modelItem.ImageUrl}
                            price={modelItem.Price}
                            detailsUrl={modelItem.detailsUrl}
                         
                        ></CarComponent>
                    </div>
                })}
            </div>
        </div>
    );
};

export default CarsListingPage;
