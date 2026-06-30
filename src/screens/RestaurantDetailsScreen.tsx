import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const RestaurantDetailsScreen = ({route}: any) => {

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=900&q=80' }}
        style={styles.image}
      />
      <Text style={styles.title}>{route.params.name}</Text>
      <Text style={styles.subtitle}>Price: {route.params.price}</Text>
      <Pressable style={styles.button} onPress={()=>{
        //@ts-ignore
        navigation.navigate("Cart",{
          name: route.params.name,
          price: route.params.price,
          image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=900&q=80',
          description: 'Fresh and tasty meal prepared for quick delivery.'

        })}}>
        <Text style={styles.buttonText}>Add To Cart</Text>
      </Pressable>
    </View>
  )
}

export default RestaurantDetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff7f0',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 18,
    borderRadius: 18,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1f1f1f',
    marginBottom: 8,
  },
  subtitle: {
    color: '#666',
    marginBottom: 18,
  },
  button: {
    backgroundColor: '#ff6b00',
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 14,
    shadowColor: '#ff6b00',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 12,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
})