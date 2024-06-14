// import { DropzoneInputProps, DropzoneRootProps } from 'react-dropzone';

import { CSVFileList } from '@/models/csv/CSVModels';

export interface ListPageViewModel {
  csvFilesList: CSVFileList;
  subTitle: string;
  renderOnDropzone: React.ReactNode;
}
