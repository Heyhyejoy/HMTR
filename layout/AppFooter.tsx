/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import { LayoutContext } from './context/layoutcontext';

const AppFooter = () => {
    const { layoutConfig } = useContext(LayoutContext);

    return (
        <div className="layout-footer surface-800 text-sm mt-8 mb-8 font-light text-blue-800" style={{fontFamily: 'noto-sans, sans-serif'}}>
            <a href="#" className="mr-4">Privacy Policy</a>
            <a href="#" className=''>Terms of Service</a>
            
        </div>
    );
};

export default AppFooter;
