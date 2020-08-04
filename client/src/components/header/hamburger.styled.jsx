/* 
    !   REF
    *   https://codepen.io/ainalem/pen/LJYRxz
*/
import styled from 'styled-components';

export const MenuWrapper = styled.div`
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 5px 0px;
    width: 80px;
    height: 60px;
    cursor: pointer;
`;

export const HamburgerMenu = styled.div`
    position: relative;
    transform: translateY(25px);
    background: white;
    transition: all 0ms 300ms;
    width: 80px;
    height: 5px;

    &:after {
        width: 80px;
        height: 5px;
        content: "";
        position: absolute;
        left: 0;
        top: 25px;
        background: white;
        transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    &:before {
        width: 80px;
        height: 5px;
        content: "";
        position: absolute;
        left: 0;
        bottom: 25px;
        background: white;
        transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    ${props => props.active ? `
        background: rgba(255, 255, 255, 0);

        :after {
            top: 0;
            transform: rotate(45deg);
            transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
        }
        :before {
            bottom: 0;
            transform: rotate(-45deg);
            transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
        }
    ` : ''}
`;

export const Line = styled.path`
    fill:none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke:#fff;
    stroke-width:5.5;
    stroke-linecap:round;
            
    ${props => props.top ? `
        stroke-dasharray: 40 82;
    ` : ``}

    ${props => props.bottom ? `
        stroke-dasharray: 40 82;
    ` : ``}
`;

export const Ham = styled.svg`
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    ${props => props.active ? `
        transform: rotate(180deg);

        & > ${Line} {

            ${props => props.top ? `
                stroke-dasharray: 14 82;
                stroke-dashoffset: -72px;
            ` : `` }
        
            
            ${props => props.bottom ? `
                stroke-dasharray: 14 82;
                stroke-dashoffset: -72px;
            ` : `` }
        }
        

    ` : ``}
`;