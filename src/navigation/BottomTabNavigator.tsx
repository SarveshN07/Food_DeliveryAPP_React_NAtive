import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import OrdersScreen from '../screens/OrdersScreen';
import { Ionicons } from "@expo/vector-icons";
import HomeStackNavigator from './HomeStackNavigator';


const Tab = createBottomTabNavigator();

export default function BottomTabNavigator(){
    return(
        <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home-outline";
              break;

            case "Search":
              iconName = focused ? "search" : "search-outline";
              break;

            case "Orders":
              iconName = focused ? "receipt" : "receipt-outline";
              break;

            case "Profile":
              iconName = focused ? "person" : "person-outline";
              break;

            default:
              iconName = "ellipse";
          }

          return (
            <Ionicons
              //@ts-ignore
              name={iconName}
              size={size}
              color={color}
            />
          );
          
        },

        tabBarActiveTintColor: "#ff6b00",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}>
            <Tab.Screen name ="Home" 
            //@ts-ignore
             component={HomeStackNavigator}  />
            <Tab.Screen name = "Profile" component={ProfileScreen}/>
            <Tab.Screen name = "Search" component={SearchScreen}/>
            <Tab.Screen name = "orders" component={OrdersScreen}/>
        </Tab.Navigator>
    )
}