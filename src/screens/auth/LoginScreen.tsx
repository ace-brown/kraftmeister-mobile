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
        <Text style={styles.title}>E-Mail</Text>
        <TextInput onChangeText={setEmail} />
        <Text>Passwort</Text>
        <TextInput secureTextEntry onChangeText={setPassword} />
        <Pressable onPress={handleSubmit} disabled={isPending}>
          <Text>Anmelden</Text>
        </Pressable>
        {error && <Text style={styles.error}>Fehler bei der Anmeldung</Text>}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "700", color: Colors.text.primary },
  subtitle: { fontSize: 14, color: Colors.text.muted, marginTop: 8 },
  error: { color: "red", marginTop: 8, fontSize: 14 },
});
