import { plantList } from "@/datas/plantList";
import { searchProducts } from "@/utils/searchProducts";

export default async function SearchPage({searchParams}) {
    const params = await searchParams;

    const query = typeof params.q === "string" 
        ? params.q : "";

    const normalizedQuery = query.trim().toLowerCase();

    const matchingProducts = searchProducts(
        plantList,
        normalizedQuery
    );



    return (
        <div>
            <h2>Search</h2>
            <p>
                {normalizedQuery === ""  && "No search query"}
            </p>

            {/* */}
            <div>
                {query != 0 && matchingProducts.length === 0 ? (
                    "No products found"
                ):(
                    <ul>{matchingProducts.map(plant => (
                        <li key={plant.id}>
                            {plant.name}
                        </li>
                    ))}
                    </ul>
                )} 
            </div>
        </div>
    );
} 