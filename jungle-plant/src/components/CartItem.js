"use client"

import Button from "@/components/ui/Button";
import{ formatCurrency } from "@/utils/format";
import {Trash2, Plus, Minus } from "lucide-react";
import Image from "next/image";
import "@/styles/CartItem.css";


export default function CartItem({ plant }) {
    return(
        <article className="cart-item-card">
            <div className="cart-item__image-wrapper">
                <Image
                    src={plant.cover}
                    alt={plant.name}
                    fill 
                    sizes="140px"
                    className="cart-item__image"
                />
            </div>
            <div className="cart-item__content-wrapper">
                <h3 className="cart-item__name">{plant.name}</h3>
                    <div className="cart-item__content">
                            <p className="cart-item__price">
                                {formatCurrency(plant.price)}
                            </p>
                        <footer className="cart-item__actions">
                            <div className="change-button">
                                <Button 
                                    variant="secondary"
                                    size="icon"
                                    rounded="sm"
                                    id="cart-item__decrease-button"
                                >
                                    <Minus />
                                </Button>

                                <p>{1}</p>

                                <Button 
                                    variant="primary"
                                    size="icon"
                                    rounded="sm"
                                    className="cart-item__increase-button"
                                >
                                    <Plus />
                                </Button>
                            </div>
                            <Button 
                                variant="ghostDestructive"
                                size="icon"
                                rounded="sm"
                                className="cart-item__remove-button"
                            >
                             <Trash2 />   
                            </Button>
                        </footer>
                    </div>
            </div>
        </article>

    );

}