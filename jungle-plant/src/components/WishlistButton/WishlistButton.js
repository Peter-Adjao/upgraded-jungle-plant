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
            size="icon-lg"
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
                aria-hidden="true"
                className="wishlist-icon"
            />
        </Button>
    );
}