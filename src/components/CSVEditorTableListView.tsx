import styled from '@emotion/styled';
import React, { ChangeEvent, useMemo } from 'react';

import CSVEditorTableCell from './CSVEditorTableCell';

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableHeaderSection = styled.thead`
  font-size: 16px;
  padding: 12px;
  border: 1px solid gainsboro;
  text-align: left;
`;

const TableHeader = styled.th`
  border: 1px solid gainsboro;
  padding: 12px;
`;

const TableBody = styled.tbody`
  font-size: 16px;
  padding: 12px;
  border: 1px solid gainsboro;
  text-align: left;
`;

interface CSVTableViewEditorProps {
  headersData: string[];
  contentsData: string[][];
  setEditedFileContents: (newFiled: string, rowIndex: number, columnIndex: number) => void;
}

const CSVEditorTableListView: React.FC<CSVTableViewEditorProps> = ({
  headersData,
  contentsData,
  setEditedFileContents,
}) => {
  const renderHeaderList = useMemo(() => {
    return headersData.map((val, key) => {
      return <TableHeader key={key}> {val} </TableHeader>;
    });
  }, [headersData]);

  return (
    <Table>
      <TableHeaderSection>
        <tr>{renderHeaderList}</tr>
      </TableHeaderSection>
      <TableBody>
        <CSVEditorTableCell contentsData={contentsData} setEditedFileContents={setEditedFileContents} />
      </TableBody>
    </Table>
  );
};

export default React.memo(CSVEditorTableListView);
