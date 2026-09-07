"use client";

import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Link from "next/link";
import "@/styles/Header.css";

function Header() {
    const title = "Jungle House";
    const { wishlist } = useWishlist();
    const { cart } = useCart();
    
    return (
            <header className="header">
                <Link href="/" className="logo-link">
                    <div className="logo-wrapper">
                        <Image
                            src ="/icons/jh-large.png" 
                            alt="Jungle house logo" 
                            sizes="50px"
                            fill
                            priority
                            className="logo-image"
                        />
                    </div>
                </Link>
                <nav className="header-nav">
                    <Button 
                        asChild
                        variant="ghost"
                        size="icon"
                    >
                        <Link href="/cart"
                         aria-label="view cart"
                         className="header-nav__link"
                         >
                            <ShoppingCart />
                            {cart.length > 0 && (
                                <Badge 
                                    variant="count"
                                    className="cart-count-badge"
                                >
                                    {cart.length}  
                                </Badge>
                            )}
                        </Link>    
                    </Button>
                    <Button 
                        asChild
                        variant="ghost"
                        size="icon"
                    >
                        <Link href="/wishlist" aria-label="view wishlist">
                            <Heart />
                            {wishlist.length > 0 && (
                                <Badge 
                                    variant="count"
                                    className="wishlist-count"
                                >
                                    {wishlist.length}  
                                </Badge>
                            )}
                        </Link>
                    </Button>
                </nav>
            </header>
    )
}

export default Header;