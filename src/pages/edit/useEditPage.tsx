import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';

import { EditCSVFileUseCase } from '@/api/usecase/csv/EditCSVFile';
import { GetCSVFileUseCase } from '@/api/usecase/csv/GetCSVFile';
import { ResponseEmpty } from '@/models/api/APIResponseState';
import { ResponseState, State } from '@/models/api/ResponseState';
import { CSVFileContent, CSVFileHeaders, CVSFile } from '@/models/csv/CSVModels';
import { updateCSVCell } from '@/util/csv';
import { toNumber } from '@/util/number';
import { EditPageViewModel } from './editPageModel';

function useEditPage(): EditPageViewModel {
  const [csvFile, setCSVFile] = useState<CVSFile | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  const fileId = useMemo(() => {
    const fileId = searchParams.get('fileId');
    return toNumber(fileId);
  }, [searchParams]);

  const fetchCVSFile = useCallback((fileId: number) => {
    const fetchFile = new GetCSVFileUseCase();

    fetchFile.invoke(fileId).then((response: ResponseState<CVSFile>) => {
      if (response.responseState === State.Success) {
        if (response.data) {
          setCSVFile(response.data);
        }
      }
      if (response.responseState === State.Fail || response.responseState === State.Error) {
        console.log('Error: response', response);
      }
    });
  }, []);

  useEffect(() => {
    if (router.isReady && fileId) {
      fetchCVSFile(fileId);
    }
  }, [fetchCVSFile, router.isReady, fileId]);

  const filename = useMemo(() => {
    const filename = searchParams.get('filename');
    return filename ? filename : '';
  }, [searchParams]);

  const onCancelEditBtn = useCallback(() => {
    router.back();
  }, [router]);

  const onSaveAndGoBackBtn = useCallback(() => {
    const editCSVFile = new EditCSVFileUseCase();
    if (!csvFile || !fileId) return;

    editCSVFile.invoke(fileId, csvFile?.contents).then((response: ResponseState<ResponseEmpty>) => {
      if (response.responseState === State.Success) {
        router.back();
      }
      if (response.responseState === State.Fail || response.responseState === State.Error) {
        //TODO: handle error message
        console.log('Error: response', response);
      }
    });
  }, [csvFile, fileId, router]);

  const setEditedFileContents = useCallback(
    (newFiled: string, rowIndex: number, columIndex: number) => {
      if (!csvFile) return;
      const newContents = updateCSVCell(csvFile.contents, rowIndex, columIndex, newFiled);

      setCSVFile((prev) => {
        if (!prev) return null;
        return {
          ...prev,
          newContents,
        };
      });
    },
    [csvFile]
  );

  const headersData = useMemo((): CSVFileHeaders => {
    if (!csvFile) return [];
    return csvFile.headers;
  }, [csvFile]);

  const contentsData = useMemo((): CSVFileContent => {
    if (!csvFile) return [];
    return csvFile.contents;
  }, [csvFile]);

  return {
    csvFile,
    filename,
    onCancelEditBtn,
    onSaveAndGoBackBtn,
    setEditedFileContents,
    headersData,
    contentsData,
  };
}

export default useEditPage;
