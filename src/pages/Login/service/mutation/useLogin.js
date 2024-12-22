import request from "../../../../config/request";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  return useMutation({
    mutationFn: (data) => {
      return request.post("/auth/login", data);
    },
  });
};
