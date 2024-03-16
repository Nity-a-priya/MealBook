import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../assets/data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

function MealsOverviewScreen({ route, navigation }) {
  const catID = route.params.categoryID;
  const catTitle = route.params.categoryName;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catID) >= 0;
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: catTitle,
    });
  }, []);

  function renderMeals(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageURL: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    const pressEactMeal = () => {
      navigation.navigate("Meal Details", {
        details: item,
      });
    };

    return <MealItem {...mealItemProps} onPress={pressEactMeal} />;
  }

  return (
    <View style={styles.outerContainer}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMeals}
      />
    </View>
  );
}
export default MealsOverviewScreen;
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    padding: 16,
  },
});
