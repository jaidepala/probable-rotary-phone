/* 
    !   REF
    *   https://www.w3schools.com/howto/howto_js_slideshow.asp
*/
import React, { useState } from 'react';

// Styled
import { SiteSlideContainer, SiteSlide, SiteSlideButton, SiteSlideImage, SiteSlideCaption, SiteSlideNumber, SiteDotsContainer, SiteDots } from './slider.styled';

const SliderComponent = () => {

    const [currentSlide, setCurrentSlide] = useState(1);

    const list = [
        {
            id: 1,
            src: 'https://images.unsplash.com/photo-1593661982469-ff1e1bbbc88d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=747&q=80',
            title: 'Title 1'
        },
        {
            id: 2,
            src: 'https://images.unsplash.com/photo-1575325952371-0ded5da744f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            title: 'Title 2'
        },
        {
            id: 3,
            src: 'https://images.unsplash.com/photo-1592628496196-fa86695c3454?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            title: 'Title 3'
        },
        {
            id: 4,
            src: 'https://images.unsplash.com/photo-1501591642422-d14accd39d6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            title: 'Title 4'
        },
        {
            id: 5,
            src: 'https://images.unsplash.com/photo-1560766025-f523cb2a1316?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
            title: 'Title 5'
        }
    ];

    const handleClick = (slideNo) => {

        if (slideNo > list.length)
            slideNo = 1;
        else if (slideNo < 0)
            slideNo = list.length;

        setCurrentSlide(slideNo);
    };

    return (
        <>
            <SiteSlideContainer>
                {
                    list.map((thisSlide) => {

                        const { id, title, src } = thisSlide;

                        return (
                            <SiteSlide key={id} active={currentSlide === id}>
                                <SiteSlideNumber>
                                    { id  }/{ list.length }
                                </SiteSlideNumber>
                                <SiteSlideImage src={src} />
                                <SiteSlideCaption>{ title }</SiteSlideCaption>
                            </SiteSlide>
                        )
                    })
                }

                <SiteSlideButton type={"prev"} onClick={() => handleClick(currentSlide - 1)}>
                    &#10094;
                </SiteSlideButton>
                <SiteSlideButton type={"next"} onClick={() => handleClick(currentSlide + 1)}>
                    &#10095;
                </SiteSlideButton>
            </SiteSlideContainer>
            <SiteDotsContainer style={{'display': 'none'}}>
            {
                list.map((thisSlide) => {

                    const { id } = thisSlide;
                    return (
                        <SiteDots key={id} active={currentSlide === id} onClick={() => handleClick(id)} />
                    );
                })
            }
            </SiteDotsContainer>
        </>
    );
}

export default SliderComponent;
