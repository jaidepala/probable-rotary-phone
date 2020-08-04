import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';
import { Layout, Menu } from 'antd';
import {
  LeftSquareTwoTone,
  RightSquareTwoTone,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

// Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import SidebarComponent from './components/sidebar/sidebar.component';
import HeaderComponent from './components/header/header.component';

// Pages
import LoginPage from './pages/login/login.page';
import AccountPage from './pages/account/account.page';
import MyOrderPage from './pages/my-order/my-order.page';
import ProductPage from './pages/product/product.page';

// Styled
import { SiteOverlay, SiteLayout } from './App.styled';

const { Content } = Layout;

class App extends Component {

  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {

    const { collapsed } = this.state;

    return (
      <div className="App">
        <Layout hasSider={true}>
          <SidebarComponent toggleSideBar={collapsed} handleClick={this.toggle} />
          <SiteLayout className="site-layout">
            <HeaderComponent toggleSideBar={collapsed} handleClick={this.toggle} />
            <SiteOverlay active={!collapsed} onClick={this.toggle} />
            <Content className="site-layout-background">
              <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/account" component={AccountPage} />
                <Route path="/my-orders" component={MyOrderPage} />
                <Route path="/products" component={ProductPage} />
                {/* <Route component={LoginPage} /> */}
                {/* </Route> */}
              </Switch>
            </Content>
          </SiteLayout>
        </Layout>
      </div>
    );
  };
}

export default App;
