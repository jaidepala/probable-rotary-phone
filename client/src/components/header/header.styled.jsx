import styled from 'styled-components';
import { Layout } from 'antd';

const { Header } = Layout;

export const RightContainer = styled.div`
    float: right;
    color: #fff;
    font-size: 30px;
`;

export const SiteHeader = styled(Header)`
    width: 100%;
    display: block;
    padding: 0px;
    position: relative;
    z-index: 3;
`;

export const SiteLogoContainer = styled.div`
    padding: 0px;
    margin: 0px;
    top: 0px;
    width: 80px;
    height: 70px;
    position: absolute;
    left: 60px;
`;

export const SiteLogo = styled.img`
    position: relative;
    height: 100%;
`;
