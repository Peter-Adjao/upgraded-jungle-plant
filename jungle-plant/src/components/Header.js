"use client";

import { useWishlist } from "@/context/WishlistContext";
import Image from "next/image";
import { Heart } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Link from "next/link";
import "@/styles/Header.css";

function Header() {
    const title = "Jungle House";
    const { wishlist } = useWishlist();
    
    return (
        <header className="jh-header">
            <div className="jh-logo-container">
                <Image
                    src ="/logo.png" 
                    alt="JUngle House Logo" className="jh-logo"
                    width={45}
                    height={45}
                />
            </div>
                <div>
                    <h1 className="jh-title">{title}</h1>
                </div>
                <nav className="wishlist-nav">
                        <Link href="/wishlist">
                            <Button
                                variant="ghost"
                                size="icon"
                            >
                                <Heart className="header-wishlist-icon" />

                                {wishlist.length > 0 && (
                                    <Badge 
                                        variant="count"
                                        className="header-count"
                                    >
                                        {wishlist.length}  
                                    </Badge>
                                )}
                            </Button>
                        </Link>
                </nav>
        </header>
    )
}

export default Header;