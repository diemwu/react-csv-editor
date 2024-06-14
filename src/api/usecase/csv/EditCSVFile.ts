import NetworkApiImpl from '@/api/NetworkAPiImpl';
import { ResponseEmpty } from '@/models/api/APIResponseState';
import { ResponseState, State } from '@/models/api/ResponseState';
import { CSVFileContent } from '@/models/csv/CSVModels';

interface EditCSVFileUseCaseInterface {
  invoke: (fileId: number, content: CSVFileContent) => Promise<ResponseState<ResponseEmpty>>;
}

export class EditCSVFileUseCase implements EditCSVFileUseCaseInterface {
  apiProcess: NetworkApiImpl;

  constructor() {
    this.apiProcess = new NetworkApiImpl();
  }

  async invoke(fileId: number, content: CSVFileContent): Promise<ResponseState<ResponseEmpty>> {
    try {
      const response = await this.apiProcess.editFileQuery(fileId, content);
      if (response.isSuccessful) {
        return {
          responseState: State.Success,
          data: response.body,
        };
      }
      return { responseState: State.Fail, error: response.errorBody! };
    } catch (error) {
      return { responseState: State.Error };
    }
  }
}
