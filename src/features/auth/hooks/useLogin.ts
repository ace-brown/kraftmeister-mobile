import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../../../providers";
import { LoginPayload } from "../types";
import { login } from "../api";

export function useLogin() {
  const { login: saveToken } = useAuth();

  return useMutation({
    mutationFn: (payload: LoginPayload) => {
      return login(payload);
    },
    onSuccess: (tokens) => {
      saveToken(tokens);
    },
  });
}
