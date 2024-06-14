import NetworkApiImpl from '@/api/NetworkAPiImpl';
import { ResponseState, State } from '@/models/api/ResponseState';
import { CSVFileList } from '@/models/csv/CSVModels';
import { uploadCSVEntityResToTarget } from './CSVEntity';

interface GetCSVFileListUseCaseInterface {
  invoke: () => Promise<ResponseState<CSVFileList>>;
}

export class GetCSVFileListUseCase implements GetCSVFileListUseCaseInterface {
  apiProcess: NetworkApiImpl;

  constructor() {
    this.apiProcess = new NetworkApiImpl();
  }

  async invoke(): Promise<ResponseState<CSVFileList>> {
    try {
      const response = await this.apiProcess.getCSVFileListQuery();
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
