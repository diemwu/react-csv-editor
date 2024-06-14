import React, { ChangeEvent, use, useCallback, useEffect, useState } from 'react';

import BaseInput from './baseComponents/BaseInput';

interface CSVInputFieldProps {
  value: string;
  onBlur: (newFiled: string, rowIndex: number, columnIndex: number) => void;
  rowIndex: number;
  columnIndex: number;
}

const inputFieldStyle = {
  fontSize: '16px',
  backgroundColor: 'transparent',
  border: 'none',
  width: '91%',
  padding: '12px 12px',
};

const CSVInputField: React.FC<CSVInputFieldProps> = ({ value, onBlur, rowIndex, columnIndex }) => {
  const key = rowIndex + columnIndex + `CSVInputField`;
  const [_value, setValue] = useState(value);

  const _onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const _onBlur = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onBlur(e.target.value, rowIndex, columnIndex);
    },
    [columnIndex, onBlur, rowIndex]
  );
  return (
    <BaseInput key={key} value={_value} type="text" onChange={_onChange} onBlur={_onBlur} style={inputFieldStyle} />
  );
};

export default React.memo(CSVInputField);
