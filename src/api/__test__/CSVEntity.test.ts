import { CSVFileList } from '@/models/csv/CSVModels';
import { CSVListAPIEntity, uploadCSVEntityResToTarget } from '../usecase/csv/CSVEntity';

describe('CSVEntity utility functions', () => {
  test('uploadCSVEntityResToTarget correctly transforms API response', () => {
    const expected: CSVFileList = [
      {
        headers: ['col1', 'col2', 'col3', 'col4', 'col5'],
        contents: [
          ['eeeex', 'Text2', 'Text3', 'Text4', 'Text5'],
          ['A2', 'B2', 'C2', 'D2', 'E5'],
          ['A3', 'B3', 'C3', 'D2', 'E5'],
          ['A4', 'B4', 'www', 'D2', 'E5'],
          ['A5', 'B5', 'C5', 'D2dddd', 'E5'],
        ],
        filename: 'diemCo22.csv',
        id: 1,
      },
    ];
    const CSVListAPIEntityData: CSVListAPIEntity = {
      data: {
        items: [
          {
            headers: ['col1', 'col2', 'col3', 'col4', 'col5'],
            contents: [
              ['eeeex', 'Text2', 'Text3', 'Text4', 'Text5'],
              ['A2', 'B2', 'C2', 'D2', 'E5'],
              ['A3', 'B3', 'C3', 'D2', 'E5'],
              ['A4', 'B4', 'www', 'D2', 'E5'],
              ['A5', 'B5', 'C5', 'D2dddd', 'E5'],
            ],
            filename: 'diemCo22.csv',
            id: 1,
          },
        ],
      },
    };

    const result = uploadCSVEntityResToTarget(CSVListAPIEntityData);

    expect(result).toEqual(expected);
  });
});
