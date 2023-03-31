import { useEffect, useState } from "react";
import styles from "@/styles/products.module.css";
import { useLoader } from "@/context/loader-context";

export default function Products() {
  const [products, setProducts] = useState([]);
  const { setShowLoader } = useLoader();

  const fetchProducts = () => {
    setShowLoader(true);

    const productsResponse = [];
    for (let i = 0; i < 20; i++) {
      const imageUrl = "https://picsum.photos/150/100";
      productsResponse.push({
        id: i,
        name: `Product-${i + 1}`,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis illo possimus asperiores laboriosam fugiat",
        quantity: Math.floor(Math.random() * 10),
        imageUrl,
      });
    }

    setTimeout(() => {
      setShowLoader(false);
    }, 5000);

    setProducts(productsResponse);
  };

  const updateQuantity = (id, quantity) => {
    setProducts((productsList) =>
      productsList?.map((product) =>
        product.id === id ? { ...product, quantity } : product
      )
    );
  };

  const updateProduct = (id, quantity) => {
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className={styles.cardsContainer}>
        {products.map(({ id, name, quantity, imageUrl }) => {
          return (
            <div key={id} className={styles.card}>
              <div className={styles.cardBody}>
                <div>
                  <img className={styles.cardImage} src={imageUrl} />
                </div>
              </div>
              <div className={styles.cardHeader}>{name}</div>
              <div className={styles.cardFooter}>
                <div className={styles.cardQuantity}>
                  Quantity:{" "}
                  <input
                    className={styles.input}
                    type="number"
                    value={quantity}
                    onChange={(e) => updateQuantity(id, e.target.value)}
                  />
                </div>
                <div className={styles.cardSubmit}>
                  <button onClick={(e) => updateProduct(id, quantity)}>
                    Update
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
