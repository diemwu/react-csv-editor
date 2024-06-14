import React, { ChangeEvent, CSSProperties, HTMLInputTypeAttribute } from 'react';

interface BaseInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  type: HTMLInputTypeAttribute | undefined;
  style?: CSSProperties;
}

const BaseInput: React.FC<BaseInputProps> = ({ value, onChange, onBlur, type, style }) => {
  return <input value={value} type={type} onChange={onChange} onBlur={onBlur} style={style} />;
};

export default React.memo(BaseInput);
