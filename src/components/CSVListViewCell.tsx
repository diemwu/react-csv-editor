import styled from '@emotion/styled';
import React from 'react';

import { BaseButtonLink } from './baseComponents/BaseButtonLink';

type CSVListViewCellProps = {
  filename: string;
  fileId: number;
};

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid gainsboro;
  margin-top: 20px;
`;
const RowTitle = styled.p``;

const _BaseButtonLink = styled(BaseButtonLink)`
  color: fuchsia;
  background-color: lightblue;
`;

const CSVListViewCell: React.FC<CSVListViewCellProps> = (props) => {
  const { filename, fileId } = props;

  return (
    <RowContainer>
      <RowTitle>{filename}</RowTitle>
      <_BaseButtonLink pathname={`/edit/fileId=${fileId}`} query={{ filename, fileId }}>
        Edit
      </_BaseButtonLink>
    </RowContainer>
  );
};

export default React.memo(CSVListViewCell);
