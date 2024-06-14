import NetworkApiImpl from '@/api/NetworkAPiImpl';
import { ResponseState, State } from '@/models/api/ResponseState';
import { CSVFileList } from '@/models/csv/CSVModels';
import { uploadCSVEntityResToTarget } from './CSVEntity';

interface UploadCSVFileUseCaseInterface {
  invoke: (data: FormData) => Promise<ResponseState<CSVFileList>>;
}

export class UploadCSVFileUseCase implements UploadCSVFileUseCaseInterface {
  apiProcess: NetworkApiImpl;

  constructor() {
    this.apiProcess = new NetworkApiImpl();
  }

  async invoke(data: FormData): Promise<ResponseState<CSVFileList>> {
    try {
      const response = await this.apiProcess.uploadCSVFileQuery(data);
      if (response.isSuccessful) {
        return {
          responseState: State.Success,
          data: uploadCSVEntityResToTarget(response.body!),
        };
      }
      return { responseState: State.Fail, error: response.errorBody! };
    } catch (error) {
      return { responseState: State.Error };
    }
  }
}
