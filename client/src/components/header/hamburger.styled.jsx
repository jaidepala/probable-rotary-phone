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