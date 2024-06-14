import styled from '@emotion/styled';
import React from 'react';

interface BaseContainerProps {
  children?: React.ReactNode;
}
const Container = styled.div`
  padding: 50px;
`;

const BaseContainer: React.FC<BaseContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default React.memo(BaseContainer);
