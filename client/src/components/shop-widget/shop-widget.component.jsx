import React from 'react';

// Styled
import { ShopWidgetCard, ShopWidgetTitle, ShopWidgetProductContainer, ShopWidgetProduct, ShopWidgetProductImageContainer, ShopWidgetProductImage, ShopWidgetProductCaption } from './shop.styled';

const ShopWidgetComponent = () => {
    return (
        <ShopWidgetCard
            hoverable
            bordered={false}
            bodyStyle={{padding: '0px 0px 10px 0px'}}
            cover={<ShopWidgetTitle>Shop For More</ShopWidgetTitle>}>
            
            <ShopWidgetProductContainer >
                <ShopWidgetProduct xs={12}>
                    <ShopWidgetProductImageContainer>
                        <ShopWidgetProductImage src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />

                        <ShopWidgetProductCaption>
                            Caption 1
                        </ShopWidgetProductCaption>
                    </ShopWidgetProductImageContainer>
                </ShopWidgetProduct>
                <ShopWidgetProduct xs={12}>
                    <ShopWidgetProductImageContainer>
                        <ShopWidgetProductImage src="https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />

                        <ShopWidgetProductCaption>
                            Caption 2
                        </ShopWidgetProductCaption>
                    </ShopWidgetProductImageContainer>
                </ShopWidgetProduct>
                <ShopWidgetProduct xs={12}>
                    <ShopWidgetProductImageContainer>
                        <ShopWidgetProductImage src="https://images.unsplash.com/photo-1464454709131-ffd692591ee5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80" />

                        <ShopWidgetProductCaption>
                            Caption 3
                        </ShopWidgetProductCaption>
                    </ShopWidgetProductImageContainer>
                </ShopWidgetProduct>
                <ShopWidgetProduct xs={12}>
                    <ShopWidgetProductImageContainer>
                        <ShopWidgetProductImage src="https://images.unsplash.com/photo-1437750769465-301382cdf094?ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80" />

                        <ShopWidgetProductCaption>
                            Caption 4
                        </ShopWidgetProductCaption>
                    </ShopWidgetProductImageContainer>
                </ShopWidgetProduct>
            </ShopWidgetProductContainer>
        </ShopWidgetCard>
    );
}

export default ShopWidgetComponent;
