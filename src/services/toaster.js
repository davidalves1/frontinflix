import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DEFAULT_OPTIONS = {
  position: "top-center",
  autoClose: 4000,
};

const error = (msg, options) => toast.error(msg, { ...DEFAULT_OPTIONS, ...options });

export default {
  error: [error, ToastContainer],
};
