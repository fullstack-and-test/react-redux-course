import { useLocation, Link } from "react-router-dom";
import { useMemo } from "react";

const ProductListPage = ({ products }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const sortBy = queryParams.get("sortBy") || "rating";
  const category = queryParams.get("category") || "all";

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (sortBy === "price") result.sort((a, b) => a.price - b.price);
    else if (sortBy === "rating") result.sort((a, b) => b.rating - a.rating);

    if (category !== "all") {
      result = result.filter((product) => product.category === category);
    }

    return result;
  }, [products, category, sortBy]);

  const buildQuery = (newParams) => {
    const params = new URLSearchParams(location.search);
    Object.entries(newParams).forEach(([key, value]) => {
      if (value === null) params.delete(key);
      else params.set(key, value);
    });

    // Handle category in pathname
    let segments = location.pathname.split("/").filter(Boolean);
    // Assume /products/<oldCategory>/...  second segment is old category
    const currentCategorySegment = segments[1];
    if ("category" in newParams) {
      const newCategory = newParams.category;
      if (currentCategorySegment) segments.splice(1, 1);
      if (newCategory && newCategory !== "all") {
        segments.splice(1, 0, newCategory);
      }
    }

    return (
      "/" +
      segments.join("/") +
      (params.toString() ? `?${params.toString()}` : "")
    );
  };

  return (
    <div>
      <h2>Поточна Категорія: {category.toUpperCase()}</h2>
      <p>Сортування за: {sortBy}</p>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
        }}
      >
        <Link to={buildQuery({ sortBy: "price" })}>Сортувати за ціною</Link>
        <Link to={buildQuery({ sortBy: "rating" })}>
          Сортувати за рейтингом
        </Link>
        <Link to={buildQuery({ category: "electronics" })}>
          Фільтр: Electronics
        </Link>
        <Link to={buildQuery({ category: "laptops" })}>Фільтр: Laptops</Link> |{" "}
        <Link to={buildQuery({ category: "furniture" })}>
          Фільтр: Furniture
        </Link>{" "}
        | <Link to={buildQuery({ category: "all" })}>Всі</Link>
      </div>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.category}/${product.id}`}>
              {product.name} — ${product.price} — Рейтинг: {product.rating}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListPage;
