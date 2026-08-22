"use client"
import { useState } from "react"
import Header from "@/components/Header";
import ShoppingList from "../components/ShoppingList";
import Footer from "@/components/Footer";
import "../styles/Page.css";


export default function HomePage() {
    return (
        <div>
            <Header />
            <ShoppingList />
            <Footer />
        </div>
    );
}