"use client"

import { useState } from "react";
import { plantList } from "@/datas/plantList";
import PlantCard from "@/components/PlantCard/PlantCard";
import Categories from "./Categories";
import { useCart } from "@/context/CartContext";
import "@/styles/ShoppingList.css";

function ShoppingList() {
	// Selected category
	const [activeCategory, setActiveCategory] = useState("");

	// Get unique categories
	const categories = [...new Set(
		plantList.map((plant) => plant.category)
	)];

	const { addToCart } = useCart();
		
	return (
		<div className="shopping__page">
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
		</div>
	);
}

export default ShoppingList;
