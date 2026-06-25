import { ActivityIndicator, View, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

export default function Loading() {
  return (
    <View style={styles.centered}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  centered: { flex: 1, alignItems: "center", justifyContent: "center" },
});
