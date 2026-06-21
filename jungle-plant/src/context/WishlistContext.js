"use client"

import { createContext, useContext, useState } from "react";



const WishlistContext = createContext();


export function WishlistProvider({children}) {
    const [wishlist, setWishlist] = useState([]);
    

    const isWishlisted = (id) => {
        return wishlist.some((item) => item.id === id);
    }


    const addToWishlist = (product) => {
        setWishlist((prevWishlist) => {
            const exists = prevWishlist.some(
                (item) => item.id === product.id
            );

            if (exists) {
                return prevWishlist;
            } 

            return [...prevWishlist, product];
        });
    };


    const removeFromWishlist = (id) => {
        setWishlist((prevWishlist) => 
            prevWishlist.filter(
                (item) => item.id !==id
            )  
        );
    };

    const toggleWishlist = (product) => {
            if (isWishlisted(product.id)) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };
    return (
        <WishlistContext.Provider
            value={{
                wishlist,
                isWishlisted,
                addToWishlist,
                removeFromWishlist,
                toggleWishlist,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
}


export function useWishlist() {
    return useContext(WishlistContext);
}


