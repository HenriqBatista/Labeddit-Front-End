import { Toast } from "../components/Toast";
import { toast } from "react-toastify";

export const useToast = () => {
  const errorToast = (message) => {
    toast.error(message),
      {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      };
  };

  const successToast = (message) => {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return {
    errorToast,
    Toast,
    successToast,
  };
};
