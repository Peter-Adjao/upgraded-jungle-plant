"use client"

import Button from "@/components/ui/Button";
import { useWishlist } from "@/context/WishlistContext";
import { formatCurrency } from "@/utils/format";
import { Trash2, ShoppingCart } from "lucide-react";
import Image from "next/image";
import "@/styles/WishlistItem.css";

export default function WishlistItem({ plant }) {

    const { removeFromWishlist } = useWishlist();

    const handleRemoveWishlistItem = () => {
        removeFromWishlist(plant.id);
    };

    return (
        <article className="wishlist-item-card">
            <div className="wishlist-item-image-wrapper">
                <Image 
                    src={plant.cover}
                    alt={plant.name}
                    fill                    
                    sizes="140px"
                    className="wishlist-item-image"
                />
            </div>
                    <div className="wishlist-item-content-wrapper">
                        <h3 className="wishlist-item-name">{plant.name}</h3>
                        <div className="wishlist-item-content">
                            <div className="wishlist-item-price-section">
                                <p  className="wishlist-item-price">
                                    {formatCurrency(plant.price)}
                                </p>

                            </div>
                            <footer className="wishlist-item-actions">
                            <Button
                                variant="primary"
                                size="sm"
                                rounded="sm"
                                aria-label={`Add ${plant.name} to cart`}
                                >
                                Add to cart
                            </Button> 

                            <Button
                            variant="delete"
                            size="sm"
                            rounded="sm"
                            aria-label={`Remove ${plant.name} from wishlist`}
                            className="wishlist-remove-button"
                            onClick={handleRemoveWishlistItem}
                            >
                            Remove
                            </Button>
                        </footer>


                        </div>
                        
                 </div>
        </article>
    )
}