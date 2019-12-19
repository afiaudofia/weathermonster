import { toast } from 'react-toastify';
import get from 'lodash/get';

export const DEFAULT_TOAST_ERROR_MESSAGE =
  'Oops! Something went wrong. Please check your network and try again';

export class ToastService {
  static error(error: object): void {
    const errorMessage = get(error, ['response', 'data', 'message'], error);
    toast.error(errorMessage);
    return;
  }
}
