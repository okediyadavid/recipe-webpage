import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axios from "axios";

const createOrderApiCall = async (data) => {
  //console.log("Creating order with data:", data, "and token:", data.token);
  try {
    const response = await axios.post(
      `https://cumall-backend.onrender.com/api/orders/create`,
      {
        items: data.items,
        ordered_by: data.ordered_by,
        room_number: data.roomNumber,
        hall: data.hall,
        state: data.state,
      },
      {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    return Promise.reject(error.response.data); // Handle error response
  }
};

const useCreateOrderMutation = () => {
  return useMutation({
    mutationFn: (data) => createOrderApiCall(data),
    onSuccess: (data) => {
      // Handle success
      console.log("Mutation successful:", data);
    },
    onError: (error) => {
      // Handle error
      console.error("Mutation error:", error);
      if (error.message) {
        toast.error(error.message, {
          position: "top-center",
        });
      } else {
        toast.error(error, {
          position: "top-center",
        });
      }
    },
  });
};

export default useCreateOrderMutation;
