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
		<article className='plant-card' >
			<figure className='plant-card-image-container'>
				<Image
					src={cover}
					alt={`${plant.name} plant`}
					fill
					className='plant-card-image'
				/>
				 <WishlistButton
				 	product={plant}
				 />
				 {bestSale && <div className="card-sales-badge">Sales</div>}
			</figure>

					<div className="plantcard-subsection-container">

						{/*Product name*/}
						<h3 className='plant-name'>{plant.name}</h3>

					  {/* <div className='lmj-care-icons'>
						<CareScale careType='water' care={water} />
						<CareScale careType='light' care={light} />
					 </div> */}

						{/* Price and Add to Cart Section */}
						<div className="plantcard-price-container">
							<div className="price-section">
								<p  className="plant-price">{formatCurrency(price)}</p>
							</div>
							<div className="button-section">
								<Button 
								className="button-cart"
								onClick={() => addToCart(name, price)}
								variant="cart"
								size="icon-lg"
								rounded="full"
								aria-label={`Add ${plant.name} to cart`}
								>
									<ShoppingCart aria-hidden="true"/>
								</Button>
							</div>
				        </div>
						<ProductRating 
							rating={rating}
							reviewCount={reviewCount}
						/>
					</div>
		</article>
	)
}

export default PlantCard;
