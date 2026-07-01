import React, { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { CartContext } from "../context/CartContext";

const CartScreen = () => {
  const { cartItems } = useContext(CartContext);

  // Get the latest item added to the cart
  const item = cartItems[cartItems.length - 1];

  if (!item) {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your cart is empty
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri:
              item.image ??
              "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=900&q=80",
          }}
          style={styles.image}
        />

        <Text style={styles.title}>{item.name}</Text>

        <Text style={styles.subtitle}>
          {item.description ?? "No description"}
        </Text>

        <View style={styles.row}>
          <Text style={styles.label}>Price</Text>
          <Text style={styles.value}>₹ {item.price}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Quantity</Text>
          <Text style={styles.value}>1</Text>
        </View>

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>₹ {item.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff7f0",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 16,
  },
  image: {
    width: "100%",
    height: 180,
    marginBottom: 16,
    borderRadius: 14,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1f1f1f",
    marginBottom: 6,
  },
  subtitle: {
    color: "#666",
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    color: "#666",
  },
  value: {
    color: "#1f1f1f",
    fontWeight: "700",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#f0e3d8",
  },
  totalLabel: {
    color: "#1f1f1f",
    fontWeight: "700",
  },
  totalValue: {
    color: "#ff6b00",
    fontWeight: "700",
  },
});