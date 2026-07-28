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
            <figure className="wishlist-item-image">
                <Image 
                    src={plant.cover}
                    alt={plant.name}
                    fill                    
                    sizes="140px"
                    className="wishlist-item-image-content"
                />
            </figure>
                    <section className="wishlist-item-content-wrapper">
                        <h3>{plant.name} coming from the plant</h3>
                        <section className="wishlist-item-content">
                            <div className="wishlist-item-price-section">
                                <p  className="product-price">
                                    {formatCurrency(plant.price)}
                                </p>
                                <h5>Me now</h5>
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
                            variant="ghost"
                            size="sm"
                            rounded="sm"
                            aria-label={`Remove ${plant.name} from wishlist`}
                            className="wishlist-remove-button"
                            onClick={handleRemoveWishlistItem}
                            >
                            Remove
                            </Button>
                        </footer>


                        </section>
                        
                 </section>
        </article>
    )
}