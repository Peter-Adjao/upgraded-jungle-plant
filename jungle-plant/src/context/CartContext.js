"use client"

import { createContext, useContext, useState } from "react";



const CartContext = createContext();

// Cart Provider
export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addToCart(plant) {
        setCart((prevCart) => {
            const existingItem = prevCart.find(
                (item) => item.id === plant.id
            );

            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === plant.id
                        ? {
                              ...item,
                              quantity: item.quantity + 1,
                          }
                        : item
                );
            }

            return [
                ...prevCart,
                {
                    ...plant,
                    quantity: 1,
                },
            ];
        });
    }

    console.log("Cart:", cart );
    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}


export function useCart() {
    return useContext(CartContext);
} 