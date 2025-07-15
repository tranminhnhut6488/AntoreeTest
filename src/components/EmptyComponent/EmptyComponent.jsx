import React from 'react';
import { EmptyIcon, EmptyText, EmptyWrapper } from './style';

const EmptyComponent = ({ description = "Không có dữ liệu" }) => {
  return (
    <EmptyWrapper>
      <EmptyIcon>😕</EmptyIcon>
      <EmptyText>{description}</EmptyText>
    </EmptyWrapper>
  );
};

export default EmptyComponent;