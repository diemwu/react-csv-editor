import { useCallback, useEffect, useMemo, useState } from 'react';

import { GetCSVFileListUseCase } from '@/api/usecase/csv/GetCSVFileList';
import { UploadCSVFileUseCase } from '@/api/usecase/csv/UploadCSVFile';
import useOnDropzoneWrapper from '@/hook/useOnDropzoneWrapper';
import { ResponseState, State } from '@/models/api/ResponseState';
import { CSVFileList } from '@/models/csv/CSVModels';
import { ListPageViewModel } from './listPageModel';

function useListPage(uploadBtn: React.ReactNode): ListPageViewModel {
  const [csvFilesList, setCSVFilesList] = useState<CSVFileList>([]);

  const fetchCVSFiles = useCallback(() => {
    const fetchFile = new GetCSVFileListUseCase();
    fetchFile.invoke().then((response: ResponseState<CSVFileList>) => {
      if (response.responseState === State.Success) {
        if (response.data && response.data.length > 0) {
          setCSVFilesList(response.data);
        }
      }
      if (response.responseState === State.Fail || response.responseState === State.Error) {
        //TODO: handle error message
      }
    });
  }, []);

  useEffect(() => {
    fetchCVSFiles();
  }, [fetchCVSFiles]);

  const uploadCSVByQuery = useCallback((csvFile: File) => {
    if (typeof csvFile === 'undefined') return;
    const upLoadFile = new UploadCSVFileUseCase();
    const formData = new FormData();
    formData.append('csvFile', csvFile);

    upLoadFile.invoke(formData).then((response: ResponseState<CSVFileList>) => {
      if (response.responseState === State.Success) {
        if (response.data && response.data.length > 0) {
          setCSVFilesList(response.data);
        }
      }
      if (response.responseState === State.Fail || response.responseState === State.Error) {
        //TODO: handle error message
        console.log('Error: response', response);
      }
    });
  }, []);

  const onDrop = useCallback(
    (file: Array<File>) => {
      const csvFile = file[0];
      uploadCSVByQuery(csvFile);
    },
    [uploadCSVByQuery]
  );

  const { renderOnDropzone } = useOnDropzoneWrapper(onDrop, uploadBtn);

  const subTitle = useMemo(() => {
    if (csvFilesList.length > 0) {
      return 'Click the edit button to edit a CSV';
    }
    return 'Start by uploading a file';
  }, [csvFilesList]);

  return {
    subTitle,
    csvFilesList,
    renderOnDropzone,
  };
}

export default useListPage;
