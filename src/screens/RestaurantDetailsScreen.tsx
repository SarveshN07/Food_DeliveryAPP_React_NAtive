import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
const RestaurantDetailsScreen = ({route}: any) => {
  const restaurant = route.params;
  const { addToCart } = useContext(CartContext);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: restaurant.image }}
        style={styles.image}
      />
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subtitle}>Price: {restaurant.price}</Text>
      <Text style={styles.description}>{restaurant.description}</Text>
      <Pressable style={styles.button} onPress={()=>{
        addToCart(restaurant);
        //@ts-ignore
        navigation.navigate("Cart",{
          name: restaurant.name,
          price: restaurant.price,
          image: restaurant.image,
          description: restaurant.description

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
  description: {
    color: '#6b5b4f',
    textAlign: 'center',
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