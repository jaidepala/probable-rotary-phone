import styled from 'styled-components';

export const IconCatalogueContainer = styled.div`
    background-color: #001529ee;
    overflow: auto;
    white-space: nowrap;
    text-align: center;
`;

export const IconCatalogueLink = styled.a`
    display: inline-block;
    color: white;
    text-align: center;
    padding: 10px 10px;
    text-decoration: none;
    height: 60px;

    &:hover {
        background-color: #777;
    }
`;

export const IconCatalogueImage = styled.img`
    position: relative;
    display: block;
    height: 100%;
`;