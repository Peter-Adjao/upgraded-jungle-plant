"use client"

import Button from "@/components/ui/Button";
import { useWishlist } from "@/context/WishlistContext";
import { formatCurrency } from "@/utils/format";
import { Trash2, ShoppingCart } from "lucide-react";
import Image from "next/image";
import "@/styles/WishlistItem.css";
import ProductRating from "@/components/PlantCard/ProductRating"

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
                            <div className="wishlist-item__price-section">
                                <ProductRating 
                                    rating={plant.rating}
                                    reviewCount={plant.reviewCount}
                                />
                                <p  className="wishlist-item-price">
                                    {formatCurrency(plant.price)}
                                </p>
                            </div>
                            <footer className="wishlist-item-actions">
                            <Button
                                variant="primary"
                                size="special"
                                rounded="md"
                                className="wishlist-add-to-cart-button"
                                >
                                Add to Cart
                            </Button> 

                            <Button
                            variant="ghostDestructive"
                            size="sm"
                            rounded="sm"
                            className="wishlist-remove-button"
                            aria-label={`Delete ${plant.name} from wishlist`}
                            onClick={handleRemoveWishlistItem}
                            >
                            <Trash2 aria-hidden="true"/>
                            </Button>
                        </footer>


                        </div>
                        
                 </div>
        </article>
    )
}