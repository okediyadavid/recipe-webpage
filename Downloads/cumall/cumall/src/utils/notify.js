import { toast } from "react-toastify";

export const notify = (type = "success", message) => {
  if (type === "error") {
    toast.error(message, {
      position: "top-center",
    });
  } else if (type === "success") {
    toast.success(message, {
      position: "top-center",
    });
  } else if (type === "successBottom") {
    toast.success(message, {
      position: "bottom-center",
    });
  }
};
