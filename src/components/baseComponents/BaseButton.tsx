import styled from '@emotion/styled';
import React, { useCallback } from 'react';

interface BaseButtonProps {
  type?: 'default' | 'outline';
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

const Button = styled.button`
  background-color: slateblue;
  color: white;
  padding: 10px 10px;
  border-radius: 5px;
  outline: 0;
  border: 0;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: slateblue;
  }
`;
const OutLineButton = styled(Button)`
  background-color: white;
  color: slateblue;
  border: 1px solid slateblue;
  &:hover {
    background-color: white;
  }
`;
const BaseButton: React.FC<BaseButtonProps> = ({ onClick, children, disabled = false, type = 'default' }) => {
  const _onClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  switch (type) {
    case 'outline':
      return (
        <OutLineButton onClick={_onClick} disabled={disabled}>
          {children}
        </OutLineButton>
      );

    default:
      return (
        <Button onClick={_onClick} disabled={disabled}>
          {children}
        </Button>
      );
  }
};

export default React.memo(BaseButton);
