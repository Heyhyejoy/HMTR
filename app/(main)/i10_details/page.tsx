'use client';

import React, { useState } from 'react';

const ButtonTabs: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<'highlights' | 'exterior' | 'price'>('highlights');

    const [selectedColor, setSelectedColor] = useState<'white' | 'red' | 'blue' | 'grey' | 'black' | 'green'>('white');

    const colorHexMap: Record<typeof selectedColor, string> = {
        white: '#ffffff',
        red: '#a53434ff',
        blue: '#908dacff',
        grey: '#b2b2b2ff',
        black: '#3d3d3dff',
        green: '#526d63ff',
    };

    const colorImageMap: Record<typeof selectedColor, string> = {
        white: './layout/images/whitei10.avif',
        red: './layout/images/redi10.avif',
        blue: './layout/images/bluei10.avif',
        grey: './layout/images/greyi10.avif',
        black: './layout/images/blacki10.avif',
        green: './layout/images/greeni10.avif'
    };

    const buttonStyle = (tab: string) => {
        const isActive = selectedTab === tab;
        return {
            padding: '10px 20px',
            margin: '0 8px',
            border: isActive ? '2px solid navy' : 'none',
            backgroundColor: isActive ? 'white' : 'navy',
            color: isActive ? 'navy' : 'white',
            cursor: 'pointer',
            borderRadius: '6px',
            fontWeight: 'bold'

        };
    };

    const renderContent = () => {
        switch (selectedTab) {
            case 'highlights':
                return (
                    <div style={{ fontFamily: 'noto-sans, sans-serif' }}>
                        <h2 className="text-4xl font-bold mt-8 mb-2">i10 Highlights</h2>
                        <h2 className="text-2xl font-bold mt-8 mb-4">Size makes the difference.</h2>
                        <div className='' style={{ fontFamily: 'noto-sans, sans-serif' }}>
                            <p className="text-sm mb-2">
                                If you want to live life big, you need to make a difference. Just like the i10. With its updated design details
                                <br></br>
                                and all-new technology, this smart city car offers everything you need to live life on your own terms.
                            </p>
                        </div>
                        <img
                            src="./layout/images/i10_1.png"
                            alt="Highlights"
                            className="mt-6 w-5 border-round-xl mx-auto rounded-lg shadow"
                        />
                        <h2 className="text-2xl font-bold mt-6 mb-4">Perfect for small spaces and big moments.</h2>
                        <div className='' style={{ fontFamily: 'noto-sans, sans-serif' }}>
                            <p className="text-sm mb-2">
                                City streets can sometimes get crowded. When faced with tight turns and small parking spaces, you'll be amazed by the
                                <br></br>
                                renewed maneuverability of this smart city car.
                                <br></br>
                                At just 3.67 meters long and 1.68 meters wide, the i10 combines a compact exterior with a spacious interior. It offers the
                                <br></br>
                                flexibility to make a big difference in your life.
                            </p>
                        </div>
                        <div className="grid">
                            <div className="col">
                                <img
                                    src="./layout/images/i10_2.png"
                                    alt=""
                                    className="mt-5 ml-8 w-8"
                                />
                                <div className="p-3 text-center ml-8 bg-primary font-bold">
                                    <p className='font-bold text-2xl text-left'>
                                        Dynamic and stylish.
                                    </p>
                                    <p className='font-normal text-sm text-left'>
                                        With its flowing lines and sharp details, the i10's
                                        <br></br>
                                        renewed design makes a difference with its
                                        <br></br>
                                        sporty stance, new wheels and eye-catching
                                        <br></br>new LED lighting system.
                                    </p>
                                </div>
                            </div>
                            <div className="col">
                                <img
                                    src="./layout/images/i10_3.png"
                                    alt=""
                                    className="mt-6 w-8  mx-auto"
                                />
                                <div className="text-center p-3 border-round-sm bg-primary font-bold ">
                                    <p className='font-bold text-2xl text-left'>
                                        Connection options with technology that makes a difference.
                                    </p>
                                    <p className='font-normal text-sm text-left mb-4'>
                                        Enjoy the road with Apple CarPlay™ and Android
                                        <br></br>
                                        Auto™, available on the 8-inch touchscreen in
                                        <br></br>
                                        the new fully digital instrument cluster.
                                    </p>
                                </div>
                            </div>
                            <div className="col">
                                <img
                                    src="./layout/images/i10_4.png"
                                    alt=""
                                    className="mt-5 w-8"
                                />
                                <div className="text-center p-3 bg-primary">
                                    <p className='font-bold text-2xl text-left'>
                                        More safety on the roads, greater pleasure.
                                    </p>
                                    <p className='font-normal text-sm text-left'>
                                        The i10 features one of the most comprehensive
                                        <br></br>
                                        active safety technologies in its class, including
                                        <br></br>
                                        Hyundai Smart Sense, our advanced driver
                                        <br></br>
                                        assistance system.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'exterior':
                return (
                    <div style={{ fontFamily: 'noto-sans, sans-serif' }}>
                        <h2 className="text-4xl font-bold mt-8 mb-2">i10 Exterior Design</h2>
                        <h2 className="text-2xl font-bold mt-8 mb-4">Dynamic and stylish.</h2>
                        <div className='' style={{ fontFamily: 'noto-sans, sans-serif' }}>
                            <p className="text-sm mb-2">
                                With dynamic updates to its assertive design, this bold city car is the best example of how little things can make a big difference.
                            </p>
                        </div>
                        <img
                            src={colorImageMap[selectedColor]}
                            alt={`${selectedColor} car`}
                            className="mt-4 w-6 "
                        />
                        <div className="">
                            {(['white', 'red', 'blue', 'grey', 'black', 'green'] as const).map(color => (
                                <button
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    className='m-2'
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        backgroundColor: colorHexMap[color],
                                        border: selectedColor === color ? '3px solid gray' : '1px solid lightgray',
                                        cursor: 'pointer'
                                    }}
                                    title={color}
                                />
                            ))}
                        </div>


                    </div>
                );


            case 'price':
                return (
                    <div style={{ fontFamily: 'noto-sans, sans-serif' }}>
                        <h2 className="text-4xl font-bold mt-8 mb-2">i10 Price </h2>
                        <h2 className="text-2xl font-bold mt-8 mb-4">Dynamic and stylish.</h2>
                        <div className='' style={{ fontFamily: 'noto-sans, sans-serif' }}>
                            <p className="text-sm mb-2">
                                With dynamic updates to its assertive design, this bold city car is the best example of how little things can make a big difference.
                            </p>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };


    return (
        <div className="mt-8" style={{ textAlign: 'center' }}>
            <img
                src="./layout/images/i10_landing.png"
                alt="Hyundai car"
                className="w-full h-auto"
            />
            <div className="mt-6 mb-4">
                <button style={buttonStyle('highlights')} onClick={() => setSelectedTab('highlights')}>Highlights</button>
                <button style={buttonStyle('exterior')} onClick={() => setSelectedTab('exterior')}>Exterior</button>
                <button style={buttonStyle('price')} onClick={() => setSelectedTab('price')}>Price</button>
            </div>
            <div className='text-xl'>
                {renderContent()}
            </div>
        </div>
    );
};

export default ButtonTabs;
