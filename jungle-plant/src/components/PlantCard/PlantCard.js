'use client'

import Image from 'next/image';
// import CareScale from './CareScale';
import { ShoppingCart } from 'lucide-react';
import { formatCurrency } from "@/utils/format";
import Button from "@/components/ui/Button";
import ProductRating from "./ProductRating";
import WishlistButton from "@/components/WishlistButton";
import './PlantCard.css'



function PlantCard({ plant, addToCart }) {
	const {
    cover,
    name,
    price,
    rating,
    reviewCount,
    bestSale,
    water,
    light,
  } = plant;
  
	return (
		<li className='plant-card' >
			<div className='plant-card-image-container'>
				<Image
					src={cover}
					alt={`${name} image`}
					fill
					className='plant-card-image'
				/>
				 <WishlistButton
				 	product={plant}
				 />
				 {bestSale && <div className="card-sales-badge">Sales</div>}
			</div>

					<div className="plantcard-subsection-container">

						{/*Product name*/}
						<h4 className='plant-name'>{name}</h4>

					  {/* <div className='lmj-care-icons'>
						<CareScale careType='water' care={water} />
						<CareScale careType='light' care={light} />
					 </div> */}

						{/* Price and Add to Cart Section */}
						<div className="plantcard-price-container">
							<div className="price-section">
								<span  className="original-price">{formatCurrency(price)}</span>
							</div>
							<div className="button-section">
								<Button 
								className="button-cart"
								onClick={() => addToCart(name, price)}
								variant="cart"
								size="cart_default"
								rounded="full"
								role="button"
								aria-label={`View detail for ${name}`}
								>
									<ShoppingCart />
								</Button>
							</div>
				        </div>
						<ProductRating 
							rating={rating}
							reviewCount={reviewCount}
						/>
					</div>
		</li>
	)
}

export default PlantCard;
