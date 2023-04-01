import { useEffect, useState } from "react";
import { useLoader } from "@/context/loader-context";
import styles from "@/styles/orders.module.css";

export default function Orders() {
  const API_URL = `https://dloddoqiie.execute-api.us-east-1.amazonaws.com/default/cart`;

  const [orders, setOrders] = useState([]);
  const { setShowLoader } = useLoader();

  const fetchOrders = async () => {
    setShowLoader(true);

    try {
      const response = await fetch(API_URL);
      const responseData = await response.json();
      const rows = responseData?.data ?? [];
      setOrders(rows);
    } catch (error) {
      console.log(error);
      setOrders([]);
    } finally {
      setShowLoader(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      {orders.length > 0 ? (
        <>
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

              {orders.map(({ id, productName, address }) => {
                return (
                  <tr key={id}>
                    <th className={styles.row}>{id}</th>
                    <th className={styles.row}>{productName}</th>
                    <th className={styles.row}>{address}</th>
                  </tr>
                );
              })}
            </table>
          </div>
        </>
      ) : (
        <div className={styles.dataNotFound}>
          <h1>Orders Not Available</h1>
        </div>
      )}
    </>
  );
}
