import React, { Component, useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { MoreOutlined, LeftSquareTwoTone, RightSquareTwoTone, UserOutlined, VideoCameraOutlined, UploadOutlined, } from '@ant-design/icons';

// Images
import logo from './logo.png';

// Styled
import { SiteHeader, RightContainer, SiteLogoContainer, SiteLogo } from './header.styled';

// Components
import HamburgerMenuComponent from './hamburger.menu.component';

const { Header } = Layout;
const { SubMenu } = Menu;

const HeaderComponent = ({ toggleSideBar, handleClick }) => {

    const [collapsed, setCollapsed] = useState(toggleSideBar);

    /* const toggle = () => {
        setCollapsed(!collapsed);
    }; */

    useEffect(() => {

        setCollapsed(toggleSideBar);
    });

    return (
        <SiteHeader className="site-layout-background">
            <HamburgerMenuComponent collapsed={collapsed} handleClick={handleClick} />
            <SiteLogoContainer>
                <SiteLogo src={logo} />
            </SiteLogoContainer>
            <RightContainer>
                <Menu theme="dark" mode="horizontal" triggerSubMenuAction="click" style={{ top: "0px" }}>
                    <SubMenu icon={<MoreOutlined style={{fontSize: "20px", color: "#fff"}} title="" />}>
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                    </SubMenu>
                </Menu>
            </RightContainer>
        </SiteHeader>
    );
}

export default HeaderComponent;
