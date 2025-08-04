/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import { LayoutContext } from './context/layoutcontext';

const AppFooter = () => {
    const { layoutConfig } = useContext(LayoutContext);

    return (
        <div className="layout-footer text-blue-900 font-light ">
            <a href="#" className="mr-4">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            
        </div>
    );
};

export default AppFooter;
