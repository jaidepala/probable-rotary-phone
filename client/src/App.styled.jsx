import styled from 'styled-components';

import { Layout } from 'antd';

export const SiteLayout = styled(Layout)`

   
`;

export const SiteOverlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 2;
    cursor: pointer;
    transition: 0.7s all;

    ${props => props.active ? 
    `
        display: block;
    ` :
    `
        display: none;
    `}
`;