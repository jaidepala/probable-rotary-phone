import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const SidebarComponent = ({ toggleSideBar }) => {

	const [collapsed, setCollapsed] = useState(toggleSideBar);

	const toggle = () => {
		setCollapsed(!collapsed);
	};

	useEffect(() => {

		setCollapsed(toggleSideBar);
	});

	return (
		<Sider
			breakpoint="lg"
			collapsedWidth="0"
			onBreakpoint={broken => {
				console.log(broken);
			}}
			onCollapse={(collapsed, type) => {
				console.log(collapsed, type);
			}} 
			trigger={null} 
			collapsible 
			collapsed={collapsed}>

			<div className="logo" />
			<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
				<Menu.Item key="1" icon={<UserOutlined />}>
					<Link to="/account">
						Account
					</Link>
				</Menu.Item>
				<Menu.Item key="2" icon={<VideoCameraOutlined />}>
					<Link to="/my-orders">
						My Orders
					</Link>
				</Menu.Item>
				<Menu.Item key="3" icon={<UploadOutlined />}>
					<Link to="/">
						Shop
					</Link>
				</Menu.Item>
			</Menu>
		</Sider>
	);
};

export default SidebarComponent;
