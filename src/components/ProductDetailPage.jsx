import { useParams } from "react-router-dom";
import { products } from "../data/data";

const ProductDetailPage = () => {
  const { productId } = useParams();

  const product = products.find((product) => product.id === productId);

  if (!product) {
    return <h2>Товар не знайдено</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Ціна: {product.price}$</p>
    </div>
  );
};

export default ProductDetailPage;
