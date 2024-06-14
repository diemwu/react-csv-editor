export type CSVFileContent = string[][];
export type CSVFileHeaders = string[];
export interface CVSFile {
  id: number;
  filename: string;
  headers: CSVFileHeaders;
  contents: CSVFileContent;
}

export type CSVFileList = CVSFile[];
