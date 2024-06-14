import { CSVFileContent } from '@/models/csv/CSVModels';

export function updateCSVCell(
  contents: CSVFileContent,
  rowIndex: number,
  columnIndex: number,
  newValue: string
): CSVFileContent {
  if (rowIndex < 0 || rowIndex >= contents.length) {
    return contents;
  }
  const newContents = [...contents];
  newContents[rowIndex][columnIndex] = newValue;
  return newContents;
}
