import styled from 'styled-components';

export const FadeInWrapper = styled.div`
    opacity: ${(props) => (props.visible ? 1 : 0)};
    transform: ${(props) => (props.visible ? 'translateY(0)' : 'translateY(100px)')};
    transition: all 0.8s ease;
    will-change: transform, opacity;
`;
