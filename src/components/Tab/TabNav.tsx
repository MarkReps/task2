import React from 'react';
import './tabnav.css';

interface TabNavProps {
    activeTab: string;
    label: string;
    onChangeActiveTab: (arg1: string) => void;
}

const TabNav: React.FC<TabNavProps> = ({ activeTab, label, onChangeActiveTab }) => {
    return (
        <button className={activeTab === label ? 'active' : ''} type='button' onClick={() => onChangeActiveTab(label)}>
            {label}
        </button>
    );
};

export default TabNav;