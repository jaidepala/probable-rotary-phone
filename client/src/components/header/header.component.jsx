import React, { Component, useState, useEffect } from 'react';
import { Layout } from 'antd';
import { LeftSquareTwoTone, RightSquareTwoTone, UserOutlined, VideoCameraOutlined, UploadOutlined, } from '@ant-design/icons';

// Components
import HamburgerMenuComponent from './hamburger.menu.component';

const { Header } = Layout;

const HeaderComponent = ({ toggleSideBar, handleClick }) => {

    const [collapsed, setCollapsed] = useState(toggleSideBar);

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    useEffect(() => {

        setCollapsed(toggleSideBar);
    });

    return (
        <Header className="site-layout-background" style={{ padding: 0 }}>
            <HamburgerMenuComponent collapsed={collapsed} handleClick={handleClick} />
        </Header>
    );
}

export default HeaderComponent;
