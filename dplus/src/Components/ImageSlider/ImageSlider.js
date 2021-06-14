import React from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'

const Carousel = styled(Slider)`
    margin: 20px 0 0 0;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }
`

const Wrap = styled.div`
cursor: pointer;
img {
    border: 4px solid transparent;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: .3s;
    &:hover {
       border: 4px solid rgba(249, 249, 249, 0.8); 
    }
}
`

function ImageSlider() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slideToScroll: 1,
        autoplay: true
    }

    return (
        <Carousel {...settings}>
            <Wrap>
                <img alt="text1" src="/images/dashboard/slider-badging.jpg" />
            </Wrap>
            <Wrap>
                <img alt="text2" src="/images/dashboard/slider-badag.jpg" />
            </Wrap> 
        </Carousel>
    )
}

export default ImageSlider
