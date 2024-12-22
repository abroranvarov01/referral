import request from "../../../../config/request";
import { useMutation } from "@tanstack/react-query";
export const useRegister = () => {
  return useMutation({
    mutationFn: (data) => {
      return request.post("/auth/register", data);
    },
  });
};
