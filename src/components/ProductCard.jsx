import styles from "./ProductCard.module.css";

export default function ProductCard({
  name,
  price,
  inStock,
  discount,
  rating,
  isFeatured,
  freeShipping,
}) {
  if (!inStock) {
    return (
      <div className={styles.cardUnavailable}>
        <h3 className={styles.cardTitle}>{name}</h3>
        <p className={styles.unavailableText}>❌ Товар недоступний</p>
        <button className={styles.notifyButton}>
          Повідомити про надходження
        </button>
      </div>
    );
  }

  const formatPrice = (price) => {
    return price % 1 === 0 ? price.toString() : price.toFixed(2);
  };

  const discountedPrice = discount > 0 ? price * (1 - discount / 100) : price;
  const stars = "⭐️".repeat(rating);
  const buttonText = inStock ? "Купити" : "Повідомити про надходження";
  const inStockText = inStock ? "✅ В наявності" : "❌ Немає в наявності";

  return (
    <div className={styles.card}>
      {isFeatured && (
        <div className={styles.featuredBadge}>🔥 Рекомендуємо</div>
      )}

      {discount > 0 && (
        <span className={styles.discountdBadge}>-{discount}%</span>
      )}

      <h3 className={styles.cardTitle}>{name}</h3>

      <div className={styles.priceContainer}>
        {discount > 0 ? (
          <>
            <span className={styles.oldPrice}>{formatPrice(price)} </span>
            <span className={styles.newPrice}>
              {formatPrice(discountedPrice)} грн
            </span>
          </>
        ) : (
          <span className={styles.price}>{formatPrice(price)} грн</span>
        )}
      </div>

      {rating > 0 && <p className={styles.rating}>{stars}</p>}

      {freeShipping && (
        <p className={styles.shipping}>🚚 Безкоштовна доставка</p>
      )}

      <p className={styles.stockStatus}>{inStockText}</p>

      <button className={styles.buyButton}>{buttonText}</button>
    </div>
  );
}
