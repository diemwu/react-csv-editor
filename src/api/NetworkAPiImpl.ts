import { Url } from 'url';
import axios from 'axios';

import { Response, ResponseEmpty } from '@/models/api/APIResponseState';
import { CSVFileContent } from '@/models/csv/CSVModels';
import { APIService } from './APIService';
import NetworkApi from './NetworkApi';
import { CSVFileAPIEntity, CSVListAPIEntity } from './usecase/csv/CSVEntity';

export default class NetworkApiImpl implements NetworkApi {
  apiService: APIService;

  apiEndPoint: URL;

  constructor() {
    this.apiService = new APIService(axios.create());
    this.apiEndPoint = new URL('http://localhost:8080');
  }

  getCSVFileListQuery(): Promise<Response<CSVListAPIEntity>> {
    return this.apiService.get<CSVListAPIEntity>(`${this.apiEndPoint.origin}/v1/api/csv/list`);
  }

  uploadCSVFileQuery(data: FormData): Promise<Response<CSVListAPIEntity>> {
    return this.apiService.post<CSVListAPIEntity>(`${this.apiEndPoint.origin}/v1/api/csv/upload`, data);
  }
  getCSVFileQuery(id: number): Promise<Response<CSVFileAPIEntity>> {
    return this.apiService.get<CSVFileAPIEntity>(`${this.apiEndPoint.origin}/v1/api/csv/getById/${id}`);
  }

  editFileQuery(id: number, contents: CSVFileContent): Promise<Response<ResponseEmpty>> {
    return this.apiService.post<ResponseEmpty>(`${this.apiEndPoint.origin}/v1/api/csv/edit`, { id, contents });
  }
}
