'use client';
import React from 'react';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';



const CarComponent = ({modelName,modelImageUrl,price,detailsUrl}) => {

    
function handleClickDetailButton(){
    }
    return (
        <Card>
            <div className='flex flex-column align-items-center'>

                <div className='border-round-xl'>
                    <Image src={modelImageUrl} alt="Image" width="250" />
                </div>
                <div className='flex flex-column w-9'>
                    <span className='text-3xl font-bold'>{modelName}</span>
                    <span className='font-semibold text-blue-800'>{price}</span>
                </div>
                <div className='flex flex-row justify-content-end w-full'>
                    <a href={detailsUrl} className="p-button font-bold text-50">
                        Details
                    </a>
                </div>
            </div>
        </Card>
    );
};

export default CarComponent;
