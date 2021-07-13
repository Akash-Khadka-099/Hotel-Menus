import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealsDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions : {
      // headerStyle: {
      //   backgroundColor: Colors.primaryColor,
      // },
      // headerTintColor: "white",
      headerTitle : ' Meals Categories'
    }
  },
  CategoryMeals: {
    screen: CategoryMealsScreen,
    // navigationOptions: {
    //   headerStyle: {
    //     backgroundColor: Colors.primaryColor,
    //   },
    //   headerTintColor: "white",
    // },
    
  },
  MealDetail : MealsDetailScreen,
  // MealDetail : {
  //   screen : MealsDetailScreen,
  //   navigationOptions : {
  //     headerTitle : ''
  //   }
  // } 

},  {
  defaultNavigationOptions : {
    headerStyle: {
      backgroundColor: Colors.primaryColor,
    },
    headerTintColor: "white",
  }
}
);

export default createAppContainer(MealsNavigator);
