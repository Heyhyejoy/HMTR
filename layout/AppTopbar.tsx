/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { classNames } from 'primereact/utils';
import React, { forwardRef, useContext } from 'react';
import { AppTopbarRef } from '@/types';
import { LayoutContext } from './context/layoutcontext';

const AppTopbar = forwardRef<AppTopbarRef>((props, ref) => {
    const { layoutConfig, layoutState, onMenuToggle, showProfileSidebar } = useContext(LayoutContext);

    return (
        <div className="layout-topbar bg-white font-light" style={{fontFamily: 'noto-sans, sans-serif'}}>
            <Link href="/" className="layout-topbar-logo">
                <img src={`/layout/images/logo.svg`} width="180px" height={'50px'} alt="logo" />
            </Link>

            <div className={classNames('layout-topbar-menu', { 'layout-topbar-menu-mobile-active': layoutState.profileSidebarVisible })}>
                <Link href="./cars">
                    <button type="button" className="p-link layout-topbar-button text-xl mr-6 text-blue-800">Vehicles</button>
                </Link>
                <Link href="./company">
                    <button type="button" className="p-link layout-topbar-button text-xl mr-3 text-blue-800">Company</button>
                </Link>
                <Link href="./login">
                    <button type="button" className="p-link layout-topbar-button">
                        <i className="pi pi-user"></i>
                        <span>Profile</span>
                    </button>
                </Link>
            </div>
        </div>
    );
});

AppTopbar.displayName = 'AppTopbar';

export default AppTopbar;
