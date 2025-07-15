import styled, { keyframes } from 'styled-components';

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const SpinnerOverlay = styled.div`
  display: ${({ isLoading }) => (isLoading ? 'flex' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.6);
  z-index: 999;
`

export const Spinner = styled.div`
  border: 6px solid #f3f3f3;
  border-top: 6px solid #1890ff;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  animation: ${spin} 1s linear infinite;
`

export const Wrapper = styled.div`
  position: relative;
`