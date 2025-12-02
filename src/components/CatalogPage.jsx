import SearchFilter from "./SearchFilter";
import Pagination from "./Pagination";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

const products = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Pineapple",
  "Grapes",
  "Peach",
  "Strawberry",
  "Blueberry",
  "Watermelon",
];

const CatalogPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const currentPage = searchParams.get("page") || 1;

  const pageSize = 3;

  const filteredProducts = useMemo(() => {
    return products.filter((p) =>
      p.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredProducts.slice(start, start + pageSize);
  }, [filteredProducts, currentPage]);

  const totalPages = Math.ceil(filteredProducts.length / pageSize);

  return (
    <div>
      <h1>Каталог товарів</h1>
      <SearchFilter />
      <ul>
        {paginatedProducts.map((product) => (
          <li key={product}>{product}</li>
        ))}
      </ul>
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default CatalogPage;
