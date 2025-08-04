'use client'

import React, { useState } from 'react'; 
import { TabMenu } from 'primereact/tabmenu';
import { MenuItem } from 'primereact/menuitem';
import DetailsComponent from '@/app/components_2/details/DetailsComponent'; 

export default function BasicDemo() {
    const [activeIndex, setActiveIndex] = useState(0);

    const items: MenuItem[] = [
        { label: 'Highlights', icon: 'pi pi-star' },
        { label: 'Exterior Design', icon: 'pi pi-box' },
        { label: 'Performance', icon: 'pi pi-sparkles' },
        { label: 'Comfort', icon: 'pi pi-thumbs-up' }
    ];

    const renderContent = () => {
        switch (activeIndex) {
            case 0:
                return (
                    <DetailsComponent 
                        title="Highlights" 
                        description="Highlights" 
                    />
                );
            case 1:
                return (
                    <DetailsComponent 
                        title="Exterior Design" 
                        imageUrl="https://www.hyundai.com/content/dam/hyundai/tr/tr/data/vehicle-thumbnail/product/i10/small/yerli-i10-320x172.png"
                        showColorButtons={true}
                    />
                );
            case 2:
                return (
                    <DetailsComponent 
                        title="Performance" 
                        description="Performance" 
                    />
                );
            case 3:
                return (
                    <DetailsComponent 
                        title="Comfort" 
                        description="Comfort" 
                    />
                );
            default:
                return <p>Nothing selected.</p>;
        }
    };

    return (
        <div className="card">
            <TabMenu 
                model={items} 
                activeIndex={activeIndex} 
                onTabChange={(e) => setActiveIndex(e.index)} 
            />
            
            <div className="mt-4">
                {renderContent()}
            </div>
        </div>
    );
}
