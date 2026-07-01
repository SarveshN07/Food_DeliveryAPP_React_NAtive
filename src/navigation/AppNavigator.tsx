import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";




const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return(
        <Stack.Navigator initialRouteName="BottomTabs"  screenOptions={{
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
           
            <Stack.Screen name = "BottomTabs" component={BottomTabNavigator} options={{
                headerShown:false
            }}/>
        </Stack.Navigator>
    )
}

