'use client'

import Image from 'next/image';
import CareScale from './CareScale';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { formatCurrency } from "../utils/format";
import '../styles/PlantCard.css'



function PlantCard({ cover, price, name, bestSale, water, light, addToCart }) {
	return (
		<li className='plant-card' >
			<div className='plant-card-image-container'>
				<Image
					src={cover}
					alt={`${name} cover`}
					fill
					className='plant-card-image'
				/>
				 {bestSale && <div className="card-sales-badge">Sales</div>}
			</div>

			{/*Product name*/}
			<h3 className='plant-name'>{name}</h3>

			{/* <div className='lmj-care-icons'>
				<CareScale careType='water' care={water} />
				<CareScale careType='light' care={light} />
			</div> */}

				{/* Price and Add to Cart Section */}
				<div className="plantcard-subsection">
					<div className="price-section">
						<span  className="original-price">{formatCurrency(price)}</span>
					</div>
					<div className="button-section">
						<button className="add-to-cart" onClick={() => addToCart(name, price)}>
							<ShoppingCart />
						</button>
					</div>
				</div>
		</li>
	)
}

export default PlantCard;
