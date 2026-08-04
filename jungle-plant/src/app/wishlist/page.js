"use client"

import { useWishlist } from "@/context/WishlistContext";
import { HeartOff, Trash2 } from "lucide-react";
import Button from "@/components/ui/Button";
import WishlistItem from "@/components/WishlistItem";
import Footer from "@/components/Footer";
import "./Wishlist.css";

function WishlistHeader () {

    const { wishlist } = useWishlist();
        
        return ( 
            <header className="wishlist__header">
                <div className="wishlist__header-content">
                    <div className="wishlist__header-info">
                        <h1 className="wishlist__title">Wishlist</h1>
                        <p className="wishlist__count">
                            {wishlist.length} {wishlist.length===1 ? "item" : "items"}
                        </p>
                    </div>
                        <p className="wishlist__description">
                            Manage your saved plants. 
                            Add them to your cart, remove items, or clear your wishlist.
                        </p>
                </div>
            </header>
    );
}


function EmptyStateHeader () {
    return (
        <header className="empty-state-header">
                <div className="empty-state-header__content">
                        <h1 className="empty-state-header__title">Wishlist</h1>
                        <p className="empty-state-header__description">
                            Manage your saved plants. 
                            Add them to your cart, remove items, or clear your wishlist.
                        </p>
                </div>
        </header>
    );
}


function EmptyState () {
    return (
        <section className="empty-state" aria-label="Empty wishlist"> 
            <div className="empty-state__content">
                <div className="empty-state__icon-wrapper">
                    <HeartOff className="empty-state__icon" aria-hidden="true"/>
                </div>                
                <h3 className="empty-state__title">Your wishlist is empty!</h3>
                <p className="empty-state__text">
                    Found a plant you like? Tap on the heart shaped icon at the top-right corner
                    on a plant to add it to your wishlist.
                     Save your favorite plants and they will appear here. 
                </p>
                <div className="empty-state__action">
                    <Button 
                        className="empty-state__button"
                        variant="primary"
                        size="md"
                        rounded="md"
                        >
                        Continue shopping
                    </Button>
                </div>
            </div>    
        </section>
    );
}

function LoadingState() {
    return (
        <div className="loading-state" role="status" aria-live="polite">
            <p className="loading-state__text">
            Loading your wishlist...
            </p>
        </div>
    );
}


export default function WishlistPage() {
    const { wishlist, isLoaded } = useWishlist();

    const isEmpty = wishlist.length === 0;
    
    if (!isLoaded) {
        return <>
            <WishlistHeader />
            <LoadingState />
            </>
    }
    
    return (
        <>
            {isEmpty ? <EmptyStateHeader /> : <WishlistHeader />}
            <main className="wishlist">
            
            {isEmpty ? (
                
                <EmptyState />
            ) : (
                <div className="wishlist__items">
                        <ul className="wishlist__list">
                            {wishlist.map((plant) => (
                                <WishlistItem 
                                key={plant.id}
                                plant={plant}
                                />
                            ))}
                        </ul>

                        <footer className="wishlist__action">
                            <Button 
                            variant="ghostDestructive"
                            size="md"
                            rounded="md"
                            >
                                <Trash2 aria-hidden="true"/>
                                Clear All
                            </Button>
                        </footer>
                </div>
                
            )}
            </main>
            <Footer />
        </>
    );
}