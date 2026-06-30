import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/colors";
import { useJobs } from "../../features/jobs/hooks";
import { Loading, ShowError } from "../../components/ui";
import { useAuth } from "../../providers";

/** Placeholder screen for the jobs list. */
export function JobsScreen() {
  const { data, isLoading, error } = useJobs();

  if (isLoading) return <Loading />;

  if (error) return <ShowError errorMsg="Fehler beim Laden der Aufträge" />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Aufträge</Text>
        {data?.map((job) => (
          <Text key={job.id}>{job.title}</Text>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "700", color: Colors.text.primary },
  subtitle: { fontSize: 14, color: Colors.text.muted, marginTop: 8 },
  centered: { flex: 1, alignItems: "center", justifyContent: "center" },
});
