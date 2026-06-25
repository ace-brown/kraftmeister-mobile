import { View, StyleSheet, Text } from "react-native";

export default function ShowError({ errorMsg }: { errorMsg: string }) {
  return (
    <View style={styles.centered}>
      <Text>{errorMsg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  centered: { flex: 1, alignItems: "center", justifyContent: "center" },
});
