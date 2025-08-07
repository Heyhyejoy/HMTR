'use client';
import React from 'react';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';



const CarComponent = ({ modelName, modelImageUrl, detailsUrl }) => {

    return (

        <div className='flex flex-column align-items-center pt-6 surface-section border-0 hover:border-blue-900 border-2 border-round text-surface-100 font-bold m-2 flex align-items-center justify-content-center" w-19rem h-16rem'>

            <div className='border-round-xl '>
                <a href={detailsUrl} className=" font-bold text-50">
                    <Image src={modelImageUrl}  alt="Image" width="200" />
                </a>
            </div>
            <div className='flex flex-column w-9'>
                <span className='text-xl font-light flex justify-content-center'>{modelName}</span>
            </div>
            
        </div>

    );
};

export default CarComponent;
