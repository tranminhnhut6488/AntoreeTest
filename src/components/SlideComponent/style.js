import Slider from "react-slick";
import styled from "styled-components";

export const WrapperSlide = styled(Slider)`
    & .slick-arrow.slick-prev{
        left: 12px;
        top: 50%;
        z-index: 10;
        opacity: 0;
        transition: opacity 0.3s ease;
        &::before{
            font-size: 40px;
            color: #000;                  
        }   
        &:hover {
            &::before {
                color: #BD1220FF; 
            }
        }   
    }           
    & .slick-arrow.slick-next{
        right: 28px;
        top: 50%;
        z-index: 10;
        opacity: 0;
        transition: opacity 0.3s ease;
        &::before{
            font-size: 40px;
            color: #000;
        }
        &:hover {
            &::before {
                color: #BD1220FF; 
            }
        }
    }
    &:hover .slick-arrow {
        opacity: 1; 
    }

    .slick-slide img {
        width: 100%;
        height: auto;
        object-fit: cover;
        display: block;
        max-height: 80vh;
    }
`