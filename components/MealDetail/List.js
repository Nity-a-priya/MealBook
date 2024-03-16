import { ScrollView, StyleSheet, Text, View } from "react-native";

function List({ list }) {
  return list.map((datapoint) => (
    <View style={styles.outerContainer} key={datapoint}>
      <Text style={styles.text}>{datapoint}</Text>
    </View>
  ));
}

export default List;
const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 6,
    backgroundColor: "#e2b497",
    marginHorizontal: 12,
    marginVertical: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  text: {
    color: "#351401",

    textAlign: "center",
  },
});
