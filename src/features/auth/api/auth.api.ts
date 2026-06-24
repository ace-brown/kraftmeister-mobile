import { API_URL } from "../../../lib/api/client";
import { AuthTokens, LoginPayload } from "../types/auth.types";

export async function login(payload: LoginPayload): Promise<AuthTokens> {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) throw new Error("Anmeldung fehlgeschlagen");

  const parsedRes = await response.json();

  return parsedRes as AuthTokens;
}
