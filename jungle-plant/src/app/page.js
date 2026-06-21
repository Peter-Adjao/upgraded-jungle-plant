"use client"
import { useState } from 'react'
import Header from "@/components/Header";
import Cart from "@/components/Cart";
import ShoppingList from "../components/ShoppingList";
import Footer from "@/components/Footer/Footer";
import "../styles/Page.css";


export default function HomePage() {
    const [cart, updateCart] = useState([])
    return (
        <div>
            <Header />
            <div className="page-layout">
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
        
             <Footer/>
        </div>
    );
}