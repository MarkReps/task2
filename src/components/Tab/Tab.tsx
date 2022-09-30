import React, { useEffect, useState } from 'react';
import TabNav from './TabNav';
import './tab.css';
interface TabProps {
    children?: React.ReactNode | any;
}

const Tab: React.FC<TabProps> = ({ children }) => {

    const [activeTab, setActiveTab] = useState('')

    const getChildrenLabels = (): string[] => {
        return children.map((child: JSX.Element) => child.props.label)
    }

    const ActivedTab = (currentTab: string) => {
        if (activeTab !== currentTab) {
            setActiveTab(currentTab)
        }
    }

    useEffect(() => {
        const initialTab = getChildrenLabels()[0];
        setActiveTab(initialTab);
    }, [])
    return (
        <div className='tabs'>
            <div className='header'>
                {getChildrenLabels().map(label => <TabNav activeTab={activeTab} key={label} label={label} onChangeActiveTab={ActivedTab} />)}
            </div>
            <div className='content'>
                {React.Children.map(children, child => React.cloneElement(child, { activeTab }))}
            </div>
        </div>
    );
};

export default Tab;