import { toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showErrorToast = (message, theme = 'light') => {
  const toastOptions = {
    position: 'top-center',
    autoClose: 3000,
    transition: Zoom,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme
  };

  toast.error(message, toastOptions);
};

export const showSuccessToast = (message, theme = 'light') => {
  const toastOptions = {
    position: 'top-center',
    autoClose: 3000,
    transition: Zoom,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme
  };

  toast.success(message, toastOptions);
};
