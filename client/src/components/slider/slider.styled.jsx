import styled, { css, keyframes } from 'styled-components';

const FadeIn = keyframes`
    from {opacity: .4}
    to {opacity: 1}
`;

export const SiteSlideContainer = styled.div`
    max-width: 1000px;
    position: relative;
    margin: auto;
`;

export const SiteSlide = styled.div`
    display: none;

    ${props => props.active ? css`
        display: block;
        -webkit-animation-duration: 1.5s;
        animation: ${FadeIn} ease-out;
        animation-duration: 1.5s;

        &:hover {
            background-color: #717171;
        }
    ` : ``}
`;

export const SiteSlideButton = styled.a`
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;

    ${props => props.type === 'next' ? `
        right: 0;
        border-radius: 3px 0 0 3px;
    ` : ``}

    &:hover {
        background-color: rgba(0,0,0,0.8);
    }
`;

export const SiteSlideImage = styled.img`
    width: 100%;
`;

export const SiteSlideCaption = styled.div`
    color: #f2f2f2;
    font-size: 15px;
    padding: 8px 12px;
    position: absolute;
    bottom: 8px;
    width: 100%;
    text-align: center;
    background: #211e1e8c;
    color: #fff;
`;

export const SiteSlideNumber = styled.div`
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
`;

export const SiteDotsContainer = styled.div`
    text-align: center;
`;

export const SiteDots = styled.span`
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;

    ${props => props.active ? `
        background-color: #717171;` 
    : ``}

    &:hover {
        background-color: #717171;
    }
`;