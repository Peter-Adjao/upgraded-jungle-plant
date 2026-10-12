export function searchProducts(products, normalizedQuery) {
    if (!normalizedQuery) {
      return [];
    }

    const matchedProducts = products.filter(product =>
        product.name.trim().toLowerCase().includes(normalizedQuery)
    );

    return matchedProducts;
}