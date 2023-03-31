import { useEffect, useState } from "react";
import { useLoader } from "@/context/loader-context";
import styles from "@/styles/orders.module.css";

export default function Orders() {
  const [products, setProducts] = useState([]);
  const { setShowLoader } = useLoader();

  const fetchProducts = () => {
    setShowLoader(true);

    const productsResponse = [];
    for (let i = 0; i < 20; i++) {
      productsResponse.push({
        id: i,
        name: `Product-${i + 1}`,
        address: "India",
      });
    }

    setTimeout(() => {
      setShowLoader(false);
    }, 5000);

    setProducts(productsResponse);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className={styles.orderPageTitle}>
        <h2>Recent Orders</h2>
      </div>
      <div className={styles.tableData}>
        <table className={styles.table}>
          <tr>
            <th className={styles.row}>Id</th>
            <th className={styles.row}>Product Name</th>
            <th className={styles.row}>Address</th>
          </tr>

          {products.map(({ id, name, address }) => {
            return (
              <tr>
                <th className={styles.row}>{id}</th>
                <th className={styles.row}>{name}</th>
                <th className={styles.row}>{address}</th>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
