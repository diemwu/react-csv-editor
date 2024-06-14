import styled from '@emotion/styled';
import React, { useCallback, useMemo } from 'react';

import CSVInputField from '@/components/CSVInputField';

const TableDetail = styled.td`
  border: 1px solid gainsboro;
  text-align: left;
`;

interface CSVEditorTableCellProps {
  contentsData: string[][];
  setEditedFileContents: (newFiled: string, rowIndex: number, columnIndex: number) => void;
}

const CSVEditorTableCell: React.FC<CSVEditorTableCellProps> = ({ contentsData, setEditedFileContents }) => {
  const renderTableDetail = useCallback(
    (columIndex: number, key: number, subVal: any) => {
      return (
        <TableDetail key={columIndex + subVal + 'renderTableDetail'}>
          <CSVInputField
            key={columIndex + subVal + 'renderTableDetails'}
            value={subVal}
            rowIndex={key}
            columnIndex={columIndex}
            onBlur={setEditedFileContents}
          />
        </TableDetail>
      );
    },
    [setEditedFileContents]
  );

  const renderCSVCell = useMemo(() => {
    return contentsData.map((val: string[], rowIndex) => {
      return (
        <tr key={rowIndex + 'renderCSVCell'}>
          {val.map((subVal, columIndex) => {
            return renderTableDetail(columIndex, rowIndex, subVal);
          })}
        </tr>
      );
    });
  }, [contentsData, renderTableDetail]);

  return <>{renderCSVCell}</>;
};

export default React.memo(CSVEditorTableCell);
