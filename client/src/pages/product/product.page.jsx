import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HeartOutlined, HeartFilled, EllipsisOutlined, ShoppingCartOutlined, ShoppingCartFilled } from '@ant-design/icons';

import { Card } from 'antd';

// Components
import SliderComponent from '../../components/slider/slider.component';
import IconCatalogueComponent from '../../components/icon-catalogue/icon-catalogue.component';
import ShopWidgetComponent from '../../components/shop-widget/shop-widget.component';
import SearchBarComponent from '../../components/search-bar/search-bar.component';

// Styled
import { ProductWrapper, ProductContainer, ProductCard, ProductImage, ProductCardDescription } from './product.styled';

const { Meta } = Card;

class ProductPage extends Component {

    state = {
        collections: [
            {
                id: 0,
                title: 'French Fries',
                src: 'https://i.imgur.com/ImmV9MD.jpg',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ',
                total: 0
            },
            {
                id: 1,
                title: 'Roasted Vegetables',
                src: 'https://i.imgur.com/KClrC1d.jpg',
                desc: 'Est ultricies integer quis auctor elit. Faucibus ornare suspendisse.',
                total: 0
            },
            {
                id: 2,
                title: 'Burger',
                src: 'https://i.imgur.com/PERq0pJ.jpg',
                desc: 'Purus non enim. Quam vulputate dignissim suspendisse in.',
                total: 0
            },
            {
                id: 3,
                title: 'Cookies',
                src: 'https://i.imgur.com/GQOx8rE.jpg',
                desc: 'In mollis nunc sed id semper risus in hendrerit. Ut placerat.',
                total: 0
            },
            {
                id: 4,
                title: 'Taco',
                src: 'https://i.imgur.com/fOk6XSr.png',
                desc: 'Augue mauris augue neque gravida in fermentum et sollicitudin ac.',
                total: 0
            },
            {
                id: 5,
                title: 'Egg & Cheese Ring',
                src: 'https://i.imgur.com/galch3r.jpg',
                desc: 'Scelerisque purus semper eget duis at tellus at.',
                total: 0
            },
            {
                id: 6,
                title: 'Cookie Cake',
                src: 'https://i.imgur.com/BaAqHMa.jpg',
                desc: 'Viverra aliquet eget sit amet tellus.',
                total: 0
            },
            {
                id: 7,
                title: 'Egg WaffleBrown',
                src: 'https://i.imgur.com/ruBWd6h.jpg',
                desc: 'Orci ac auctor augue mauris augue. Eu non diam phasellus,',
                total: 0
            },
        ]
    };

    addToCart = (product) => {

        const newCollection = [...this.state.collections];

        let currentProductIndex = newCollection.findIndex((thisProduct) => {
            return thisProduct.id === product.id;
        });

        newCollection[currentProductIndex] = { ...newCollection[currentProductIndex], total: newCollection[currentProductIndex].total+1 };

        this.setState({
            collections: newCollection
        });
    };

    addToFav = (product) => {

        const newCollection = [...this.state.collections];

        let currentProductIndex = newCollection.findIndex((thisProduct) => {
            return thisProduct.id === product.id;
        });

        newCollection[currentProductIndex] = { ...newCollection[currentProductIndex], fav: (newCollection[currentProductIndex].fav ? false : true) };

        this.setState({
            collections: newCollection
        });
    };

    render() {

        const { collections } = this.state;

        return (
            <>
                <SearchBarComponent />

                <IconCatalogueComponent />

                <ShopWidgetComponent />

                <SliderComponent />
                
                <ProductWrapper gutter={{xs: 8, xm: 16, md: 24}} align={"top"} justify={"end"}>
                    {
                        collections.map((product, productIndex) => {

                            const { title, src, desc, total, id, fav } = product;

                            return (<ProductContainer key={id} xs={12} sm={8} md={6}>
                                <ProductCard
                                    hoverable
                                    cover={<ProductImage alt={title} src={src} />}
                                    actions={[
                                        (fav ? (<HeartFilled style={{color: "#eb2f96"}} onClick={() => this.addToFav(product)} key="like" />) : (<HeartOutlined onClick={() => this.addToFav(product)} key="like" />)),
                                        <ShoppingCartOutlined onClick={() => this.addToCart(product)} className={total > 0 && "active"} key="cart" />,
                                        <EllipsisOutlined key="ellipsis" />,
                                    ]}>
                                    <ProductCardDescription title={title} description={desc} />
                                </ProductCard>
                            </ProductContainer>)
                        })
                    }
                </ProductWrapper>
            </>
        );
    }
}

export default ProductPage;
