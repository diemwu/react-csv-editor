import { Response, ResponseEmpty } from '@/models/api/APIResponseState';
import { CSVFileContent } from '@/models/csv/CSVModels';
import { CSVFileAPIEntity, CSVListAPIEntity } from './usecase/csv/CSVEntity';

export default interface NetworkApi {
  getCSVFileListQuery(): Promise<Response<CSVListAPIEntity>>;
  uploadCSVFileQuery(data: FormData): Promise<Response<CSVListAPIEntity>>;
  getCSVFileQuery(id: number): Promise<Response<CSVFileAPIEntity>>;
  editFileQuery(id: number, data: CSVFileContent): Promise<Response<ResponseEmpty>>;
}
