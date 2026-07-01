import 'react-native-gesture-handler';
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./src/navigation/AppNavigator"
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CartProvider } from "./src/context/CartContext";
import { AuthProvider } from "./src/context/AuthContext";
import { AuthContext } from "./src/context/AuthContext";
import AuthStackNavigator from "./src/navigation/AuthStackNavigator";
import { useContext } from "react";


function RootNavigator() {
  const { isAuthenticated, isLoading } = useContext(AuthContext)

  if (isLoading) {
    return null
  }

  return isAuthenticated ? <AppNavigator /> : <AuthStackNavigator />
}



export default function App(){
  return(
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>  
        <StatusBar style="dark" backgroundColor="#fff" translucent={false} />
        <AuthProvider>
          <CartProvider>
            <NavigationContainer>
              <RootNavigator />
            </NavigationContainer>
          </CartProvider>
        </AuthProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

