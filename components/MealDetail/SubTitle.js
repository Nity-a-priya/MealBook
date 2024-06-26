import { StyleSheet, View, Text } from "react-native";

function SubTitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}
export default SubTitle;
const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    borderBottomWidth: 2,
    borderBottomColor: "#e2b497",
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
  },
});
