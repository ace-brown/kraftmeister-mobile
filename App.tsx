import { StatusBar } from "expo-status-bar";
import { QueryProvider, AuthContextProvider } from "./src/providers";
import { AppNavigator } from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <AuthContextProvider>
      <QueryProvider>
        <StatusBar style="auto" />
        <AppNavigator />
      </QueryProvider>
    </AuthContextProvider>
  );
}
