import React from 'react';
import { WrapperSlide } from './style';

const SliderComponent = ({ arrImages }) => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div style={{ maxWidth: '100vw', overflow: 'hidden' }}>
            <WrapperSlide {...settings}>
                {arrImages && arrImages.map(image => {
                    return (
                        <img key={image} src={`${process.env.REACT_APP_API_URL}/uploads/${image}`} alt={image}/>
                    )
                })}
            </WrapperSlide>
        </div>
    );
};



export default SliderComponent;