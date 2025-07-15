import React from 'react';
import { Spinner, SpinnerOverlay, Wrapper } from './style';

const Loading = ({ children, isLoading }) => {
  return (
    <Wrapper>
      <SpinnerOverlay isLoading={isLoading}>
        <Spinner />
      </SpinnerOverlay>
      {children}
    </Wrapper>
  );
};

export default Loading;
