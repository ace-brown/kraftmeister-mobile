import { StatusBar } from "expo-status-bar";
import { QueryProvider } from "./src/providers/QueryProvider";
import { AppNavigator } from "./src/navigation/AppNavigator";
import { AuthContextProvider } from "./src/providers/AuthContext";

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
