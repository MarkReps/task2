import React from 'react';
import './tabitem.css';


interface TabItemProps {
    label: string;
    activeTab?: string;
    children: React.ReactNode;
}

const TabItem: React.FC<TabItemProps> = ({ label, activeTab, children }) => {
    return (
        <div className={activeTab === label ? 'active tab-item' : 'tab-item'}>
            {children}
        </div>
    );
};

export default TabItem;