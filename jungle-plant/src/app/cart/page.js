"use client";

import { useCart }  from "@/context/CartContext";
import { useState, useMemo, useEffect } from "react";
import Button from "@/components/ui/Button";
import CartItem from "@/components/CartItem";
import "./Cart.css";

export default function CartPage() {
	
	const { cart } = useCart();


	const isEmpty = cart.length === 0;
	
	return (
		<>
			<div className="cart">
				<h1>Cart</h1>
					<div className="cart__content-wrapper">
						<div className="cart__items">
							<ul className="cart__list">
								{cart.map((plant) => (
									<CartItem 
									key={plant.id}
									plant={plant}
									/>
								))}
							</ul>
						</div>

						<section className="cart__summary-section">
							<div className="cart__summary-content">
								<h2 className="cart__summary-title">Cart Summary</h2>
										<Button 
										variant="primary"
										size="lg"
										rounded="sm"
										className="cart__summary-checkout-button"
										>
										Checkout
										</Button>
							</div>				
						</section>
					</div>
			</div>
		
		</>
		);
	}
