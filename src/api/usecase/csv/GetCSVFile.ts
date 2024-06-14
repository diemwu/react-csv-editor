import NetworkApiImpl from '@/api/NetworkAPiImpl';
import { ResponseState, State } from '@/models/api/ResponseState';
import { CVSFile } from '@/models/csv/CSVModels';
import { isValidCVSFile } from '@/util/validation';
import { fromAPIResponseToCSV } from './CSVEntity';

interface GetCSVFileUseCaseInterface {
  invoke: (fileId: number) => Promise<ResponseState<CVSFile>>;
}

export class GetCSVFileUseCase implements GetCSVFileUseCaseInterface {
  apiProcess: NetworkApiImpl;

  constructor() {
    this.apiProcess = new NetworkApiImpl();
  }

  async invoke(fileId: number): Promise<ResponseState<CVSFile>> {
    try {
      const response = await this.apiProcess.getCSVFileQuery(fileId);
      if (response.isSuccessful && isValidCVSFile(response.body!.data)) {
        return {
          responseState: State.Success,
          data: fromAPIResponseToCSV(response.body!.data),
        };
      }
      return { responseState: State.Fail, error: response.errorBody! };
    } catch (error) {
      return { responseState: State.Error };
    }
  }
}
