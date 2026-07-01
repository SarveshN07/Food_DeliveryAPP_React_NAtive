import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantDetailsScreen from "../screens/RestaurantDetailsScreen";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";


const Stack = createNativeStackNavigator();

export default function HomeStackNavigator(){
    return(
    <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="RestaurantDetails" component={RestaurantDetailsScreen} options={({route})=>{
            return{
                //@ts-ignore
                title : route.params.name
            }
        }}/>
        <Stack.Screen name = "Home" component={HomeScreen}/>
        <Stack.Screen name ="Cart" component={CartScreen}/>
    </Stack.Navigator>
    )
}