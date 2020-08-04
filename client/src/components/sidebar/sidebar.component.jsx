import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const SidebarComponent = ({ toggleSideBar, handleClick }) => {

	const [collapsed, setCollapsed] = useState(toggleSideBar);
	
	useEffect(() => {

		setCollapsed(toggleSideBar);
	});

	return (
		<Sider
			breakpoint="sm"
			collapsedWidth="0"
			onBreakpoint={broken => {
			}}
			onCollapse={(collapsed, type) => {
			}} 
			trigger={null} 
			collapsible={false}
			collapsed={collapsed}
			width="60%"
			style={{position: "absolute", zIndex: 9, height: "100vh", top: "60px"}}>

			<div className="logo" />
			<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
				<Menu.Item key="1" icon={<UserOutlined />} onClick={handleClick}>
					<Link to="/account">
						Account
					</Link>
				</Menu.Item>
				<Menu.Item key="2" icon={<VideoCameraOutlined />} onClick={handleClick}>
					<Link to="/my-orders">
						My Orders
					</Link>
				</Menu.Item>
				<Menu.Item key="3" icon={<UploadOutlined />} onClick={handleClick}>
					<Link to="/products">
						Shop
					</Link>
				</Menu.Item>
			</Menu>
		</Sider>
	);
};

export default SidebarComponent;
