import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button } from '@react-navigation/elements'
import { SafeAreaView } from 'react-native-safe-area-context'


const OnboardingScreen = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80' }}
        style={styles.image}
      />
      <Text style={styles.title}>Food Delivery App</Text>
      <Text style={styles.subtitle}>A simple food ordering app for learning navigation.</Text>
      <Button onPress ={()=> //@ts-ignore 
      navigation.navigate('BottomTabs') }>Get Started</Button>
    </View>
    </SafeAreaView>
    
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff7f0',
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 240,
    height: 180,
    marginBottom: 20,
    borderRadius: 18,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ff6b00',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#6b5b4f',
    textAlign: 'center',
    marginBottom: 20,
  },
})