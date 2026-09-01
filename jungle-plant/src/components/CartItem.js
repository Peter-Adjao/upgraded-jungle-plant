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
                                    aria-label={`Decrease ${plant.name} quantity`}
                                >
                                    <Minus aria-hidden="true"/>
                                </Button>

                                <p>{1}</p>

                                <Button 
                                    variant="primary"
                                    size="icon"
                                    rounded="sm"
                                    aria-label={`Increase ${plant.name} quantity`}
                                    className="cart-item__increase-button"
                                >
                                    <Plus aria-hidden="true"/>
                                </Button>
                            </div>
                            <Button 
                                variant="ghostDestructive"
                                size="icon"
                                rounded="sm"
                                aria-label={`Delete ${plant.name} from cart`}
                                className="cart-item__remove-button"
                            >
                             <Trash2 aria-hidden="true"/>   
                            </Button>
                        </footer>
                    </div>
            </div>
        </article>

    );

}