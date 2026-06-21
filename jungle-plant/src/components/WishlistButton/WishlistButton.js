"use client";

import { Heart } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import Button from "@/components/ui/Button";
import "./WishlistButton.css";


export default function WishlistButton({ product }) {
    const { isWishlisted, toggleWishlist } = useWishlist();

    const wished = product 
        ? isWishlisted(
        product.id)
        : false;

    return (
        <Button 
            type="button"
            variant="wishlist"
            size="wishlist_default"
            rounded="full"
            className={`wishlist-button ${
                wished ? "wishlist-active" : ""}`}
            onClick={() => toggleWishlist(product)}
            airia-label={
                wished 
                ? "Remove from wishlist"
                : "Add to wishlist"
            }
        >
            <Heart
                className="wishlist-icon"
            />
        </Button>
    );
}