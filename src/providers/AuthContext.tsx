import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthTokens, AuthUser } from "../features/auth/types/auth.types";
import { setSessionExpiredCallback } from "../lib/api/client";

interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (tokens: AuthTokens) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setSessionExpiredCallback(logout);

    const checkToken = async () => {
      const accessToken = await AsyncStorage.getItem("access_token");
      if (accessToken) {
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    };
    checkToken();
  }, []);

  const login = async (tokens: AuthTokens): Promise<void> => {
    await AsyncStorage.setItem("access_token", tokens.accessToken);
    await AsyncStorage.setItem("refresh_token", tokens.refreshToken);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("access_token");
    await AsyncStorage.removeItem("refresh_token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user: null,
        isAuthenticated,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth must be used inside AuthContextProvider");

  return context;
};
