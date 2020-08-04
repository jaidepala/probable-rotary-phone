/* 
    !   REF
    *   https://codepen.io/ricardpanades/pen/pjaaLa
*/
import styled from 'styled-components';
import { Row, Col, Card } from 'antd';
const { Meta } = Card;

export const ProductWrapper = styled(Row)`
    padding: 5px;
    background: #ececec;
`;

export const ProductContainer = styled(Col)`
    margin: 1px solid #696969;
    padding: 5px;
`;

export const ProductImage = styled.img`
    width:  100%;
    height: 200px;
    object-fit: cover;
`;

export const ProductCard = styled(Card)`
`;

export const ProductCardDescription = styled(Meta)`

    .ant-card-meta-detail {

        .ant-card-meta-description {

            -webkit-box-orient: vertical;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
        }
    }
`;
