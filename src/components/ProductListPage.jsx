import { Link } from "react-router-dom";
import { products } from "../data/data";

const ProductListPage = () => {
  return (
    <div>
      <h1>Products list:</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.id} {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListPage;
