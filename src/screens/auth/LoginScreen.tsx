import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Colors } from "../../constants/colors";
import { useLogin } from "../../features/auth/hooks";
import { Loading } from "../../components/ui";

export function LoginScreen() {
  const { mutate, isPending, error } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    mutate({ email, password });
  };

  if (isPending) return <Loading />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Anmelden</Text>

        <Text style={styles.label}>E-Mail</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="ihre@email.de"
          placeholderTextColor={Colors.text.muted}
        />

        <Text style={styles.label}>Passwort</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
          placeholder="••••••••"
          placeholderTextColor={Colors.text.muted}
        />

        {error && <Text style={styles.error}>Fehler bei der Anmeldung</Text>}

        <Pressable
          style={styles.button}
          onPress={handleSubmit}
          disabled={isPending}
        >
          <Text style={styles.buttonText}>Anmelden</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { flex: 1, paddingHorizontal: 24, justifyContent: "center" },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.text.primary,
    marginBottom: 32,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.text.secondary,
    marginBottom: 6,
  },
  input: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: Colors.text.primary,
    marginBottom: 16,
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    padding: 14,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "600" },
  error: { color: Colors.status.cancelled, fontSize: 14, marginBottom: 12 },
});
