import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'



const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurants</Text>
      <Pressable style={styles.card} onPress={()=>{
        //@ts-ignore
        navigation.navigate("RestaurantDetails" , {
            name :'Dominos',
            price : 400

        })
      }}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80' }}
          style={styles.image}
        />
        <Text style={styles.cardTitle}>Dominos</Text>
        <Text style={styles.cardText}>Pizza, pasta, fast delivery</Text>
      </Pressable>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff7f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1f1f1f',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 160,
    marginBottom: 12,
    borderRadius: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ff6b00',
  },
  cardText: {
    marginTop: 4,
    color: '#666',
  },
})