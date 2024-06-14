import styled from '@emotion/styled';
import React, { useMemo } from 'react';

import BaseButton from '@/components/baseComponents/BaseButton';
import BaseContainer from '@/components/baseComponents/BaseContainer';
import CSVListViewCell from '@/components/CSVListViewCell';
import useListPage from './useListPage';

const CSVAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid gainsboro;
  margin-top: 20px;
`;

const SubTitle = styled.p``;
const FileNameText = styled.p`
  padding-left: 10px;
`;

const UploadCSVButton = styled(BaseButton)`
  margin-top: 20px;
`;

const ListPage = () => {
  const renderUploadBtn = useMemo(() => {
    return <UploadCSVButton>Upload CSV</UploadCSVButton>;
  }, []);

  const { csvFilesList, subTitle, renderOnDropzone } = useListPage(renderUploadBtn);

  const renderFileName = useMemo(() => {
    if (csvFilesList.length > 0) {
      return <FileNameText>Filename</FileNameText>;
    }
    return null;
  }, [csvFilesList]);

  return (
    <BaseContainer>
      <h3>Manage CSVs</h3>
      <CSVAreaContainer>
        <SubTitle>{subTitle}</SubTitle>
        {renderFileName}
        {csvFilesList.map((csvFile) => (
          <div key={csvFile.id}>
            <CSVListViewCell filename={csvFile.filename} fileId={csvFile.id} />
          </div>
        ))}
        {renderOnDropzone}
      </CSVAreaContainer>
    </BaseContainer>
  );
};
export default ListPage;
