import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./src/navigation/AppNavigator"
import { NavigationContainer } from "@react-navigation/native";
import { CartProvider } from "./src/context/CartContext";



export default function App(){
  return(
    <SafeAreaProvider>  
    <CartProvider>
  <NavigationContainer>
  <AppNavigator/>
  </NavigationContainer>
    </CartProvider>
   </SafeAreaProvider>
  )
}

