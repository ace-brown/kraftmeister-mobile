import { View, Pressable, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/colors";
import { useAuth } from "../../providers";

export function ProfileScreen() {
  const { logout } = useAuth();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Profil</Text>
      </View>
      <Pressable style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutText}>Abmelden</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "700", color: Colors.text.primary },
  centered: { flex: 1, alignItems: "center", justifyContent: "center" },
  logoutButton: {
    margin: 24,
    backgroundColor: Colors.status.cancelled,
    borderRadius: 8,
    padding: 14,
    alignItems: "center",
  },
  logoutText: { color: "#FFFFFF", fontSize: 16, fontWeight: "600" },
});
