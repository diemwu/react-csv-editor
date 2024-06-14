import { CSVFileContent, CSVFileHeaders, CVSFile } from '@/models/csv/CSVModels';

export interface EditPageViewModel {
  csvFile: CVSFile | null;
  filename: string;
  onCancelEditBtn: () => void;
  onSaveAndGoBackBtn: () => void;
  setEditedFileContents: (newFiled: string, rowIndex: number, columIndex: number) => void;
  headersData: CSVFileHeaders;
  contentsData: CSVFileContent;
}
