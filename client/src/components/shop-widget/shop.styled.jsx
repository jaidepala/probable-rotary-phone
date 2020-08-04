import styled from 'styled-components';
import { Row, Col, Card } from 'antd';

export const ShopWidgetCard = styled(Card)`
    border-radius: 3px;
    padding: 0px;
`;

export const ShopWidgetTitle = styled.h2`
    text-align: center;
`;

export const ShopWidgetProductContainer = styled(Row)`
`;

export const ShopWidgetProduct = styled(Col)`
`;

export const ShopWidgetProductImageContainer = styled.div`
    border: 1px solid #e1e1e1;
    margin: 0 auto;
    overflow: hidden;
`;

export const ShopWidgetProductImage = styled.img`
    margin: 0 auto;
    display: block;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    object-fit: cover;
`;

export const ShopWidgetProductCaption = styled.div`
    text-align: center;
    padding: 8px 0px 0px 8px;
    font-weight: bold;
    position: absolute;
    background: #211e1e8c;
    color: #fff;
    width: 80%;
    bottom: 0px;
    height: 35px;
    left: 10%;
    border-radius: 10px 10px 0px 0px;
`;