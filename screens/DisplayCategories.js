import { FlatList, View, Text, StyleSheet } from "react-native";
import { CATEGORIES } from "../assets/data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const DisplayCategories = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("Meals Overview", {
        categoryID: itemData.item.id,
        categoryName: itemData.item.title,
      });
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default DisplayCategories;
const styles = StyleSheet.create({});
