'use client'

import Image from 'next/image';
// import CareScale from './CareScale';
import { ShoppingCart } from 'lucide-react';
import { formatCurrency } from "@/utils/format";
import Button from "@/components/ui/Button";
import ProductRating from "./ProductRating";
import WishlistButton from "@/components/WishlistButton";
import { useCart } from "@/context/CartContext";
import './PlantCard.css'



function PlantCard({plant}) {
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


  const { addToCart} = useCart();

  function handleAddToCart() {
		 addToCart(plant);
  }

  
	return (
		<article className='plant-card' >
			<div className='plant-card-image-container'>
				<Image
					src={cover}
					alt={`${plant.name} plant`}
					fill
					priority
					className='plant-card-image'
				/>
				 <WishlistButton
				 	product={plant}
				 />
				 {bestSale && <div className="card-sales-badge">Sales</div>}
			</div>

					<div className="plantcard-subsection-container">

						{/*Product name*/}
						<h3 className='plant-name'>{plant.name}</h3>

					  {/* <div className='lmj-care-icons'>
						<CareScale careType='water' care={water} />
						<CareScale careType='light' care={light} />
					 </div> */}
					 
						<ProductRating 
							rating={rating}
							reviewCount={reviewCount}
						/>

						{/* Price and Add to Cart Section */}
						<div className="plantcard-price-container">
							<div className="price-section">
								<p  className="plant-price">{formatCurrency(price)}</p>
							</div>
							<div className="button-section">
								<Button 
								className="button-cart"
								onClick={handleAddToCart}
								variant="cart"
								size="icon-lg"
								rounded="full"
								aria-label={`Add ${plant.name} to cart`}
								>
									<ShoppingCart aria-hidden="true" />
								</Button>
							</div>
				        </div>
					</div>
		</article>
	)
}

export default PlantCard;
