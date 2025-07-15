import React from 'react';
import { FadeInWrapper } from './style';
import { useInView } from '../../hooks/useInView';

const FadeInSection = ({ children }) => {
    const [ref, visible] = useInView();

    return (
        <div ref={ref}>
            <FadeInWrapper visible={visible}>
                {children}
            </FadeInWrapper>
        </div>
    );
};


export default FadeInSection;
