import { plantList } from "@/datas/plantList";
import { searchProducts } from "@/utils/searchProducts";
import PlantCard from "@/components/PlantCard/PlantCard";
import "./SearchPage.css";


export default async function SearchPage({searchParams}) {
    const params = await searchParams;

    const query = typeof params.q === "string" 
        ? params.q : "";

    const normalizedQuery = query.trim().toLowerCase();

    const matchingProducts = searchProducts(
        plantList,
        normalizedQuery
    );

    const resultCount = matchingProducts.length;
    const resultLabel = resultCount === 1
    ? "product" : "products";
 
    const displayQuery = query.trim();
    const resultMessage = `${resultCount} ${resultLabel} found for "${displayQuery}"`;
    

    return (
        <div className="jh-shopping-list">
            { normalizedQuery.length > 0 
            ? <h2>Search results for "{displayQuery}"</h2>
            : <h2>Search plants</h2>
            }

            { resultCount > 0 &&
                <p>{resultMessage}</p>
            }

            { normalizedQuery === ""
                ? <p>Enter a plant name in the search bar to get started.</p>
                
                : matchingProducts.length === 0  
                    ? <p>No products found for "{displayQuery}". Try another search term.</p>
                
                    : (
                    <ul className="jh-plant-list">
                        {matchingProducts.map(plant => (
                            <li key={plant.id}>
                                <PlantCard
                                    plant={plant}
                                />
                            </li>
                    ))}
                    </ul>
                )}
        </div>
    );
} 