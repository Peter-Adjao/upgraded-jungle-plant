"use client"

import { createContext, useContext, useState, useEffect } from "react";



const WishlistContext = createContext();


export function WishlistProvider({children}) {
    const [wishlist, setWishlist] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    //Load saved wishlist from local storage once, when the app fisrt mounts
    useEffect(() => {
        const stored = localStorage.getItem("wishlist");
        if(stored) setWishlist(JSON.parse(stored));
        setIsLoaded(true);
    }, []);

    // Save wishlist to local Storage whenever it changes (after initial load)
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
        }
    }, [wishlist, isLoaded]);
    

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


    const clearWishlist = () => {
        setWishlist([]);
    }


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
                isLoaded,
                isWishlisted,
                addToWishlist,
                removeFromWishlist,
                toggleWishlist,
                clearWishlist,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
}


export function useWishlist() {
    return useContext(WishlistContext);
}


