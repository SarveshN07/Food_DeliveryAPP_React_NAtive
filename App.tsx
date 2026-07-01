import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./src/navigation/AppNavigator"
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";



export default function App(){
  return(
    <SafeAreaProvider>  
      <StatusBar style="dark" backgroundColor="#fff" translucent={false} />
  <NavigationContainer>
  <AppNavigator/>
  </NavigationContainer>
   </SafeAreaProvider>
  )
}

