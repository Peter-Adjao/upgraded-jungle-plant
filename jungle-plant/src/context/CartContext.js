"use client"

import { createContext, useContext, useState, useEffect } from "react";



const CartContext = createContext();

// Cart Provider
export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);


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

//Load saved cart items from local storage once, when the app first mounts
    useEffect(() => {
        const stored = localStorage.getItem("cart");
        if (stored) setCart(JSON.parse(stored));
        setIsLoaded(true);
    }, []);


//save cart items to local storage whenever it changes, (after initial load) 
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("cart", JSON.stringify(cart));                             
        }
    }, [cart, isLoaded]);
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