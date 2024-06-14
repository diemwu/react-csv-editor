import { CSVFileContent } from '@/models/csv/CSVModels';
import { updateCSVCell } from '../csv';

describe('CSV updateCSVCell utility functions', () => {
  test('update csv cell correctly transforms API request data', () => {
    const CSVFileContentData: CSVFileContent = [
      ['A1', 'B1', 'C1', 'D1', 'E1'],
      ['A2', 'B2', 'C2', 'D2', 'E2'],
      ['A3', 'B3', 'C3', 'D3', 'E3'],
      ['A4', 'B4', 'C4', 'D4', 'E4'],
      ['A5', 'B5', 'C5', 'D5', 'E5'],
    ];
    const result = updateCSVCell(CSVFileContentData, 1, 1, 'Text2');
    const expected: CSVFileContent = [
      ['A1', 'B1', 'C1', 'D1', 'E1'],
      ['A2', 'Text2', 'C2', 'D2', 'E2'],
      ['A3', 'B3', 'C3', 'D3', 'E3'],
      ['A4', 'B4', 'C4', 'D4', 'E4'],
      ['A5', 'B5', 'C5', 'D5', 'E5'],
    ];
    expect(result).toEqual(expected);
  });

  test.each([
    [1, -1],
    [99, 1],
    [1, 99],
    [-1, -1],
  ])('update csv cell correctly transforms API request data with exceptional cases', (rowIndex, columnIndex) => {
    const CSVFileContentData: CSVFileContent = [
      ['A1', 'B1', 'C1', 'D1', 'E1'],
      ['A2', 'B2', 'C2', 'D2', 'E2'],
      ['A3', 'B3', 'C3', 'D3', 'E3'],
      ['A4', 'B4', 'C4', 'D4', 'E4'],
      ['A5', 'B5', 'C5', 'D5', 'E5'],
    ];
    const result = updateCSVCell(CSVFileContentData, rowIndex, columnIndex, 'Text2');
    expect(result).toEqual(CSVFileContentData);
  });
});
