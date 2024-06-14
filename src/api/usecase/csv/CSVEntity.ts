import { CSVFileList, CVSFile } from '@/models/csv/CSVModels';
import { isValidCVSFile } from '@/util/validation';

export interface CSVListAPIEntity {
  data: { items: CSVFileList };
}
export interface CSVFileAPIEntity {
  data: CVSFile;
}
export interface UploadCSVFileResponse {
  data: CVSFile[];
  reason?: string;
}
export const fromAPIResponseToCSV = (item: CVSFile): CVSFile => ({
  id: item.id,
  filename: item.filename,
  headers: item.headers,
  contents: item.contents,
});

const EMPTY_CSV_FILE: CVSFile = {
  id: -1,
  filename: '',
  headers: [],
  contents: [],
};

export const uploadCSVEntityResToTarget = (apiResponse: CSVListAPIEntity): CSVFileList => {
  return apiResponse.data.items.map((item) => {
    if (!isValidCVSFile(item)) return EMPTY_CSV_FILE;
    return fromAPIResponseToCSV(item);
  });
};
