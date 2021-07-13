import React from "react";
import { View, Button, Text, FlatList, StyleSheet } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummyData";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = (props) => {

  const renderMealsItems = itemData => {
    return(
      <MealItem 
       title={itemData.item.title}
       image={itemData.item.imageUrl}
       duration={itemData.item.duration}
       complexity={itemData.item.complexity.toUpperCase()}
       affordability={itemData.item.affordability.toUpperCase()} 
       onSelectMeal={()=>{
         props.navigation.navigate({
          routeName : 'MealDetail',
          params : {
            mealId: itemData.item.id
          }
        })
       }} 
      />
    );
  }

  const CatId = props.navigation.getParam("CategoryId");

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(CatId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList 
       data={displayedMeals} 
       keyExtractor={(item,index) => item.id} 
       renderItem={renderMealsItems} 
       style = {{width : '100%'}}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const CatId = navigationData.navigation.getParam("CategoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === CatId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
