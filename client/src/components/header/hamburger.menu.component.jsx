/* 
    !   REF
    *   https://codepen.io/husnimun/pen/pJvEeL
*/
import React, { useEffect } from 'react';

import { MenuWrapper, HamburgerMenu } from './hamburger.styled';

const HamburgerMenuComponent = ({ collapsed, handleClick }) => {
    return (
        <MenuWrapper onClick={handleClick}>
            <HamburgerMenu active={ !collapsed }></HamburgerMenu>
        </MenuWrapper>
    );
}

export default HamburgerMenuComponent;
