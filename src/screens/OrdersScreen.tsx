import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const OrdersScreen = () => {
  const { cartItems, clearCart } = useContext(CartContext)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Orders</Text>
        <Text style={styles.subtitle}>{cartItems.length} item(s) in cart</Text>
      </View>

      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          keyExtractor={(item, index) => `${item.id ?? item.name}-${index}`}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>

              <View style={styles.row}>
                <Text style={styles.label}>Price</Text>
                <Text style={styles.value}>{item.price}</Text>
              </View>
            </View>
          )}
          ListFooterComponent={
            <Pressable style={styles.clearButton} onPress={clearCart}>
              <Text style={styles.clearButtonText}>Clear Cart</Text>
            </Pressable>
          }
        />
      ) : (
        <View style={styles.emptyCard}>
          <Text style={styles.emptyTitle}>No items yet</Text>
          <Text style={styles.emptySubtitle}>Add a restaurant item from the details screen.</Text>
        </View>
      )}
    </View>
  )
}

export default OrdersScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff7f0',
    padding: 20,
  },
  header: {
    marginBottom: 16,
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
  },
  image: {
    width: '100%',
    height: 180,
    marginBottom: 16,
    borderRadius: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1f1f1f',
    marginBottom: 8,
  },
  subtitle: {
    color: '#666',
  },
  itemName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1f1f1f',
    marginBottom: 6,
  },
  itemDescription: {
    color: '#666',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    color: '#666',
  },
  value: {
    color: '#1f1f1f',
    fontWeight: '700',
  },
  clearButton: {
    backgroundColor: '#ff6b00',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  clearButtonText: {
    color: '#fff',
    fontWeight: '700',
  },
  emptyCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 20,
    alignItems: 'center',
    marginTop: 30,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1f1f1f',
    marginBottom: 6,
  },
  emptySubtitle: {
    color: '#666',
    textAlign: 'center',
  },
})