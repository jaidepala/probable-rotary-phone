import React, { Component } from 'react';

// Styled
import { IconCatalogueContainer, IconCatalogueLink, IconCatalogueImage } from './icon-catalogue.styled';

class IconCatalogueComponent extends Component {
    render() {

        const list = [
            {
                src: '013-cheese.png',
                title: 'Cheese'
            },
            {
                src: '038-canned-food.png',
                title: 'Canned'
            },
            {
                src: '009-fries.png',
                title: 'Fries'
            },
            {
                src: '035-lemonade.png',
                title: 'Lemonade'
            },
            {
                src: '010-wine.png',
                title: 'Wine'
            },
            {
                src: '021-bread.png',
                title: 'Bread'
            },
            {
                src: '023-corn.png',
                title: 'Corn'
            },
            {
                src: '004-watermelon.png',
                title: 'Watermelon'
            },
            {
                src: '003-sandwich.png',
                title: 'Sandwich'
            },
            {
                src: '002-bread-1.png',
                title: 'Bread'
            },
        ];

        return (
            <IconCatalogueContainer>
                {
                    list.map((food) => {
                        return (
                            <IconCatalogueLink href="#home">
                                <IconCatalogueImage src={'/836545-barbecue/png/' + food.src} alt=""/>
                                { food.title }
                            </IconCatalogueLink>
                        )
                    })
                }
            </IconCatalogueContainer>
        );
    }
}

export default IconCatalogueComponent;
