/* 
    !   REF
    *   https://www.w3schools.com/howto/howto_js_slideshow.asp
*/
import React, { useState } from 'react';

// Styled
import { SiteSlideContainer, SiteSlide, SiteSlideButton, SiteSlideImage, SiteSlideCaption, SiteSlideNumber, SiteDotsContainer, SiteDots } from './slider.styled';

const SliderComponent = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClick = (slideNo) => {

        if (slideNo > 2)
            slideNo = 0;
        else if (slideNo < 0)
            slideNo = 2;

        setCurrentSlide(slideNo);
    };

    return (
        <>
            <SiteSlideContainer>
                <SiteSlide active={currentSlide === 0}>
                    <SiteSlideNumber>1/4</SiteSlideNumber>
                    <SiteSlideImage src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
                    <SiteSlideCaption>ewfw e fwe</SiteSlideCaption>
                </SiteSlide>
                <SiteSlide active={currentSlide === 1}>
                    <SiteSlideNumber>2/4</SiteSlideNumber>
                    <SiteSlideImage src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
                    <SiteSlideCaption>weaf e fwe</SiteSlideCaption>
                </SiteSlide>
                <SiteSlide active={currentSlide === 2}>
                    <SiteSlideNumber>3/4</SiteSlideNumber>
                    <SiteSlideImage src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
                    <SiteSlideCaption>ergry e fwe</SiteSlideCaption>
                </SiteSlide>
                <SiteSlide active={currentSlide === 3}>
                    <SiteSlideNumber>4/4</SiteSlideNumber>
                    <SiteSlideImage src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
                    <SiteSlideCaption>ewew fg erwe</SiteSlideCaption>
                </SiteSlide>

                <SiteSlideButton type={"prev"} onClick={() => handleClick(currentSlide - 1)}>
                    &#10094;
                </SiteSlideButton>
                <SiteSlideButton type={"next"} onClick={() => handleClick(currentSlide + 1)}>
                    &#10095;
                </SiteSlideButton>
            </SiteSlideContainer>
            <SiteDotsContainer style={{ 'display': 'none' }}>
                <SiteDots active={currentSlide === 0} onClick={() => handleClick(0)} />
                <SiteDots active={currentSlide === 1} onClick={() => handleClick(1)} />
                <SiteDots active={currentSlide === 2} onClick={() => handleClick(2)} />
            </SiteDotsContainer>
        </>
    );
}

export default SliderComponent;
