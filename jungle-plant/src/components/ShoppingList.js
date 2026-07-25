"use client"
import { useState } from 'react';
import { plantList } from '../datas/plantList';
import PlantCard from '@/components/PlantCard/PlantCard';
import Categories from './Categories';
import "../styles/ShoppingList.css";

function ShoppingList({ cart, updateCart }) {
	// Selected category
	const [activeCategory, setActiveCategory] = useState('')

	// Get unique categories
	const categories = [...new Set(
		plantList.map((plant) => plant.category)
	)]

	// Add plant to cart
	function addToCart(name, price) {
		const plantInCart = cart.find((plant) => plant.name === name)

		if (plantInCart) {
			updateCart(
				cart.map((plant) =>
					plant.name === name
						? { ...plant, amount: plant.amount + 1 }
						: plant
				)
			)
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<main className="shopping__page">
			<div className="jh-shopping-list">

				{/* Category filter */}
				<Categories
					categories={categories}
					activeCategory={activeCategory}
					setActiveCategory={setActiveCategory}
				/>

				{/* Plant list */}
				<ul className="jh-plant-list">
					{plantList
						.filter(
							plant =>
								!activeCategory || activeCategory === plant.category 
						)
						.map(plant => (
							<PlantCard 
								key={plant.id}
								plant={plant}
								addToCart={addToCart}
								/>
					))}
				</ul>
			</div>
		</main>
	)
}

export default ShoppingList;
