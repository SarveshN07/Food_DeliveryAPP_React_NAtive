import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import RestaurantDetailsScreen from "../screens/RestaurantDetailsScreen";
import CartScreen from "../screens/CartScreen";
import BottomTabNavigator from "./BottomTabNavigator";




const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return(
        <Stack.Navigator initialRouteName="OnBoarding"  screenOptions={{
    headerStyle: {
      backgroundColor: "#ff6b00",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
        statusBarBackgroundColor: "#fff",
        statusBarStyle: "dark",
  }}>
           
            <Stack.Screen name = "OnBoarding" component={OnboardingScreen}
            />
           
            <Stack.Screen name = "BottomTabs" component={BottomTabNavigator} options={{
                headerShown:false
            }}/>
        </Stack.Navigator>
    )
}

