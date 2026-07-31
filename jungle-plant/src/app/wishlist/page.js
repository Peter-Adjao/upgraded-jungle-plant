"use client"

import { useWishlist } from "@/context/WishlistContext";
import { HeartOff, Trash2 } from "lucide-react";
import Button from "@/components/ui/Button";
import WishlistItem from "@/components/WishlistItem";
import "./Wishlist.css";

function PageHeader () {

    const { wishlist } = useWishlist();

    
        return (
    <header className="wishlist__header">
        <section className="wishlist__header__content__wrapper">
            <section className="wishlist__header-section">
                <h1 className="wishlist__title">Wishlist</h1>
                    <p className="header-section-subtitle">
                        {wishlist.length} {wishlist.length===1 ? "item" : "items"}
                    </p>
            </section>
            <p className="wishlist__subtitle">Manage your saved plants. 
                Add them to your cart, remove items, or clear your wishlist.
            </p>
        </section>
    </header>
    );
}


function EmptyState () {
    return (
        <article className="wishlist__empty__page"> 
            <section className="wishlist__empty__content__wrapper">
                <figure className="wishlist__empty__icon__wrapper">
                    <HeartOff className="wishlist__empty__icon" />
                </figure>                <h3 className="wishlist__empty-title">Your wishlist is empty!</h3>
                <p className="wishlist__empty-text">
                    Found a plant you like? Tap on the heart shaped icon at the top-right corner
                    on a plant to add it to your wishlist.
                     Save your favorite plants and they will appear here. 
                </p>
                <div className="continue__shopping-wrapper">
                <Button 
                    className="continue__shopping"
                    variant="primary"
                    size="md"
                    rounded="sm"
                    >
                    Continue shopping
               </Button>
            </div>
            </section>    
        </article>
    );
}


export default function WishlistPage() {
    const { wishlist, isLoaded } = useWishlist();

    const isEmpty = wishlist.length === 0;
    
    if (!isLoaded) {
        return <>
            <PageHeader />
            <div className="wishlist-loading-wrapper">
                <p className="wishlist-loading">
                Loading your wishlist...
                </p>
            </div>
            </>
    }
    
    return (
            <>
            <PageHeader />
        <main className="wishlist-page">
            
            {isEmpty ? (
                <EmptyState />
            ) : (
                <article className="wishlist__list__wrapper">

                        <ul className="wishlist__list">
                            {wishlist.map((plant) => (
                                <WishlistItem 
                                key={plant.id}
                                plant={plant}
                                />
                            ))}
                        </ul>

                        <footer className="clear-button-container">
                            <Button 
                            variant="outline"
                            size="md"
                            rounded="md"
                            >
                                <Trash2 />
                                Clear All
                            </Button>
                        </footer>
                </article>
                
            )}
        </main>
            </>
    );
}