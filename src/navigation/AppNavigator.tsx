import { ActivityIndicator, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabNavigator } from "./TabNavigator";
import { LoginScreen } from "../screens/auth/LoginScreen";
import { useAuth } from "../providers/AuthContext";

const { Navigator, Screen } = createNativeStackNavigator();

/** Root navigation container. Switches between auth and app screens based on session state. */
export function AppNavigator() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Screen name="Main" component={TabNavigator} />
        ) : (
          <Screen name="Login" component={LoginScreen} />
        )}
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
});
