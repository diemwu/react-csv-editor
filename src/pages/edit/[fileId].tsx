import styled from '@emotion/styled';
import { useMemo } from 'react';

import BaseButton from '@/components/baseComponents/BaseButton';
import BaseContainer from '@/components/baseComponents/BaseContainer';
import BaseHeaderTitle from '@/components/baseComponents/BaseHeaderTitle';
import CSVEditorTableListView from '@/components/CSVEditorTableListView';
import useEditPage from './useEditPage';

const CSVAreaEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid gainsboro;
  margin-top: 20px;
`;

const FileNameText = styled.p`
  padding-left: 10px;
`;

const ActionButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export default function Page() {
  const { filename, onSaveAndGoBackBtn, onCancelEditBtn, setEditedFileContents, headersData, contentsData } =
    useEditPage();

  const renderActionButtonContainer = useMemo(() => {
    return (
      <ActionButtonContainer>
        <BaseButton type="outline" onClick={onCancelEditBtn}>
          Cancel
        </BaseButton>
        <BaseButton onClick={onSaveAndGoBackBtn}>Save and go back</BaseButton>
      </ActionButtonContainer>
    );
  }, [onCancelEditBtn, onSaveAndGoBackBtn]);
  return (
    <BaseContainer>
      <BaseHeaderTitle>Edit CSV</BaseHeaderTitle>

      <CSVAreaEditorContainer>
        <FileNameText>{filename}</FileNameText>
        <CSVEditorTableListView
          headersData={headersData}
          contentsData={contentsData}
          setEditedFileContents={setEditedFileContents}
        />
        {renderActionButtonContainer}
      </CSVAreaEditorContainer>
    </BaseContainer>
  );
}
