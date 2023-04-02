import { useEffect, useState } from "react";
import styles from "@/styles/products.module.css";
import { useLoader } from "@/context/loader-context";
import Image from "next/image";

export default function Products() {
  const API_URL = `https://xi3mxeszjj.execute-api.us-east-1.amazonaws.com/default/items`;

  const [products, setProducts] = useState([]);
  const { setShowLoader } = useLoader();

  const fetchProducts = async () => {
    setShowLoader(true);

    try {
      const response = await fetch(API_URL);
      const responseData = await response.json();
      const rows = responseData?.data ?? [];
      setProducts(rows);
    } catch (error) {
      console.log(error);
      setProducts([]);
    } finally {
      setShowLoader(false);
    }
  };

  const updateQuantity = (id, quantity) => {
    setProducts((productsList) =>
      productsList?.map((product) =>
        product.id === id ? { ...product, quantity } : product
      )
    );
  };

  const updateProduct = async (id, product) => {
    setShowLoader(true);

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        mode: "cors",
        body: JSON.stringify(product),
      });
    } catch (error) {
      console.log(error);
    } finally {
      fetchProducts();
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {products.length > 0 ? (
        <div className={styles.cardsContainer}>
          {products.map(({ id, productName, quantity, imageURL }) => {
            return (
              <div key={id} className={styles.card}>
                <div className={styles.cardBody}>
                  <div>
                    <Image
                      className={styles.cardImage}
                      src={imageURL} // Route of the image file
                      height={300} // Desired size with correct aspect ratio
                      width={300} // Desired size with correct aspect ratio
                      alt="product img"
                    />
                  </div>
                </div>
                <div className={styles.cardHeader}>{productName}</div>
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
                    <button
                      onClick={(e) =>
                        updateProduct(id, { productName, quantity, imageURL })
                      }
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.dataNotFound}>
          <h1>Products Not Available</h1>
        </div>
      )}
    </>
  );
}
