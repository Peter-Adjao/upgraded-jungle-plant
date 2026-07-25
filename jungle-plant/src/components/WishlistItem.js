"use client"

import Button from "@/components/ui/Button";
import { useWishlist } from "@/context/WishlistContext";
import { formatCurrency } from "@/utils/format";
import { Trash2 } from "lucide-react";
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
            <section className="wishlist-item-content">
                <h3>{plant.name}</h3>
                <p  className="product-price">
                    {formatCurrency(plant.price)}
                    </p>

                    <footer className="wishlist-item-actions">
                        {/* <BUtton
                            variant="Ghost"
                            size="lg"
                            rounded="md"
                            aria-label={`Add ${plant.name} to wishlist`}
                            >
                            <ShoppingCart />
                            Add to cart
                        </Button> */}

                        <Button
                        variant="ghost"
                        size="sm"
                        aria-label={`Remove ${plant.name} from wishlist`}
                        className="wishlist-remove-button"
                        onClick={handleRemoveWishlistItem}
                        >
                            <Trash2 />
                             Remove
                        </Button>
                    </footer>
            </section>

        </article>
    )
}