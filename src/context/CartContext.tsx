import React, { createContext, useState } from 'react'

export const CartContext = createContext<any>(null)

export const CartProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<any[]>([])

  const addToCart = (item: any) => {
    setCartItems((prevItems) => [...prevItems, item])
  }

  const removeFromCart = (name: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.name !== name))
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}>
      {children}
    </CartContext.Provider>
  )
}

