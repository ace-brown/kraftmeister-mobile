import AsyncStorage from "@react-native-async-storage/async-storage";

export const API_URL = "https://tanned-velvet-shadiness.ngrok-free.dev";

async function getAccessToken(): Promise<string | null> {
  return AsyncStorage.getItem("access_token");
}

async function getRefreshToken(): Promise<string | null> {
  return AsyncStorage.getItem("refresh_token");
}

async function applyTokens(tokens: {
  accessToken: string;
  refreshToken: string;
}) {
  await AsyncStorage.setItem("access_token", tokens.accessToken);
  await AsyncStorage.setItem("refresh_token", tokens.refreshToken);
}

async function tryRefresh(): Promise<string | null> {
  const refreshToken = await getRefreshToken();
  if (!refreshToken) return null;

  const res = await fetch(`${API_URL}/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken }),
  });

  if (!res.ok) return null;

  const tokens = await res.json();
  await applyTokens(tokens);
  return tokens.accessToken;
}

export async function apiClient<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const token = await getAccessToken();

  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    ...options,
  });

  if (response.status === 401) {
    const newToken = await tryRefresh();
    if (!newToken) {
      await AsyncStorage.removeItem("access_token");
      await AsyncStorage.removeItem("refresh_token");
      throw new Error("Sitzung abgelaufen");
    }

    const retry = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${newToken}`,
      },
      ...options,
    });

    if (!retry.ok) throw new Error("API-Anfrage fehlgeschlagen");
    if (retry.status === 204) return undefined as T;
    return retry.json();
  }

  if (!response.ok) throw new Error("API-Anfrage fehlgeschlagen");
  if (response.status === 204) return undefined as T;
  return response.json();
}
