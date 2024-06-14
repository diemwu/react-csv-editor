import { isValidCVSFile } from '@/util/validation';

describe('validateCVSFile', () => {
  it('should validate a valid CVSFile object', () => {
    // Create a valid CVSFile object
    const file = {
      id: 1,
      filename: 'file.csv',
      headers: ['header1', 'header2'],
      contents: [
        ['row1col1', 'row1col2'],
        ['row2col1', 'row2col2'],
      ],
    };

    // Validate the CVSFile object
    expect(isValidCVSFile(file)).toBeTruthy();
  });

  test.each([['abc', ['header1', 'header2'], [1, 'header_error']]])(
    'should not validate an invalid CVSFile object',
    (col1, col2) => {
      // Create an invalid CVSFile object
      const file = {
        id: col1, // Invalid id
        filename: 'file.csv',
        headers: col2,
        contents: [
          ['row1col1', 'row1col2'],
          ['row2col1', 'row2col2'],
        ],
      };
      // Validate the CVSFile object
      expect(isValidCVSFile(file)).toBeFalsy();
    }
  );
});
