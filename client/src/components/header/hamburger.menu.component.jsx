/* 
    !   REF
    *   https://codepen.io/husnimun/pen/pJvEeL
*/
import React, { useEffect } from 'react';

// import { MenuWrapper, HamburgerMenu, Ham, Line } from './hamburger.styled';
import { Ham, Line } from './hamburger.styled';

const HamburgerMenuComponent = ({ collapsed, handleClick }) => {
    return (
        <Ham onClick={handleClick} active={!collapsed} viewBox="0 0 100 100" width="65" >
            <Line top={true} d="m 30,33 h 40 c 0,0 8.5,-0.68551 8.5,10.375 0,8.292653 -6.122707,9.002293 -8.5,6.625 l -11.071429,-11.071429" />
            <Line d="m 70,50 h -40" />
            <Line bottom={true} d="m 30,67 h 40 c 0,0 8.5,0.68551 8.5,-10.375 0,-8.292653 -6.122707,-9.002293 -8.5,-6.625 l -11.071429,11.071429" />
        </Ham>
    );
    {/* <MenuWrapper onClick={handleClick}>
        <HamburgerMenu active={ !collapsed }></HamburgerMenu>
    </MenuWrapper> */}
}

export default HamburgerMenuComponent;
