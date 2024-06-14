import styled from '@emotion/styled';
import React from 'react';

interface BaseHeaderTitleProps {
  children?: React.ReactNode;
}
const Header = styled.header`
  text-bold: bold;
`;

const BaseHeaderTitle: React.FC<BaseHeaderTitleProps> = ({ children }) => {
  return <Header>{children}</Header>;
};

export default React.memo(BaseHeaderTitle);
