'use client'

import React, { useState } from 'react';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';

interface DetailsComponentProps {
    title: string;
    description?: string;
    imageUrl?: string;
    showColorButtons?: boolean;
}

const colorImageMap: { [key: string]: string } = {
    white: 'https://www.hyundai.com/content/dam/hyundai/tr/tr/images/common/360vr/i10/lhd/ex/i10-full-jant/AC3_PE_SAW/AC3_PE_SAW_0.png',
    skyblue: 'https://www.hyundai.com/content/dam/hyundai/tr/tr/images/common/360vr/i10/lhd/ex/i10-full-jant/AC3_PE_PM2/AC3_PE_PM2_0.png',
    red: 'https://www.hyundai.com/content/dam/hyundai/tr/tr/images/common/360vr/i10/lhd/ex/i10-full-jant/AC3_PE_WR7/AC3_PE_WR7_0.png',
    gray: 'https://www.hyundai.com/content/dam/hyundai/tr/tr/images/common/360vr/i10/lhd/ex/i10-full-jant/AC3_PE_Y3H/AC3_PE_Y3H_0.png',
    black: 'https://www.hyundai.com/content/dam/hyundai/tr/tr/images/common/360vr/i10/lhd/ex/i10-full-jant/AC3_PE_A7G/AC3_PE_A7G_0.png',
    green: 'https://www.hyundai.com/content/dam/hyundai/tr/tr/images/common/360vr/i10/lhd/ex/i10-full-jant/AC3_PE_MG2/AC3_PE_MG2_0.png'
};

const colorStyleMap: { [key: string]: string } = {
    white: '#ffffff',
    skyblue: '#9794bcff', 
    red: '#b72525ff',
    gray: '#c0c0c0ff',
    black: '#000000',
    green: '#5b7f79ff'
};

const DetailsComponent: React.FC<DetailsComponentProps> = ({
    title,
    description,
    imageUrl,
    showColorButtons
}) => {
    const [currentImage, setCurrentImage] = useState(imageUrl);

    const handleColorClick = (color: string) => {
        if (colorImageMap[color]) {
            setCurrentImage(colorImageMap[color]);
        }
    };

    const renderExteriorButtons = () => {
        const colors = Object.keys(colorImageMap);
        return (
            <div className="flex flex-wrap justify-content-center gap-3 mb-4 mt-4">
                {Object.keys(colorImageMap).map((color, index) => (
                    <Button
                        key={index}
                        style={{
                            backgroundColor: colorStyleMap[color], // 시각적 배경색
                            border: '1px solid #ccc',
                            boxShadow: '0px 0px 3px gray',
                            width: '2.5rem',
                            height: '2.5rem'
                        }}
                        onClick={() => handleColorClick(color)}
                        rounded
                    />
                ))}
            </div>
        );
    };

    return (
        <div>
            <span className="text-3xl font-bold">{title}</span>
            {description && <p className="mt-2">{description}</p>}
            {currentImage && (
                <div className="mt-4 border-round-xl flex flex-wrap justify-content-center">
                    <Image src={currentImage} alt={title} width="600" />
                </div>
            )}
            {showColorButtons && renderExteriorButtons()}
        </div>
    );
};

export default DetailsComponent;
