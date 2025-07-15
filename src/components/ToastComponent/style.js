import styled, { keyframes } from 'styled-components';

export const fadeInOut = keyframes`
  0% { opacity: 0; transform: translateY(-20px); }
  10% { opacity: 1; transform: translateY(0); }
  90% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-20px); }
`

export const ToastWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 12px 20px;
  border-radius: 8px;
  color: white;
  z-index: 9999;
  font-size: 16px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.15);
  animation: ${fadeInOut} 3s ease-in-out;
  background-color: ${({ type }) =>
    type === 'success' ? '#4caf50' :
    type === 'error' ? '#f44336' :
    '#333'};
`