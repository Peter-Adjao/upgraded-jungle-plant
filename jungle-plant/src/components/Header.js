"use client";

import { useWishlist } from "@/context/WishlistContext";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Link from "next/link";
import "@/styles/Header.css";

function Header() {
    const title = "Jungle House";
    const { wishlist } = useWishlist();
    
    return (
            <header className="header">
                <div className="logo-wrapper">
                    <Image
                        src ="/icons/logo.png" 
                        alt="Jungle house logo" 
                        sizes="45px"
                        fill
                        priority
                        className="logo-image"
                    />
                </div>
                <div>
                    <h1 className="jh-title">{title}</h1>
                </div>
                <nav className="header-nav">
                    <Button asChild
                        variant="ghost"
                        size="icon"
                    >
                        <Link href="/cart" aria-label="view cart">
                            <ShoppingCart />
                            {wishlist.length > 0 && (
                                <Badge 
                                    variant="count"
                                    className="cart-count"
                                >
                                    {wishlist.length}  
                                </Badge>
                            )}
                        </Link>    
                    </Button>
                    <Button asChild
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