import Link from 'next/link'

import styles from "@/styles/navbar.module.css";

export default function Navbar() {
  return (
    <div>
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                WareHouse
            </div>
            <div className={styles.navItems}>
                <div className={styles.navItem}>
                    <Link className={styles.link} href="/products">Products</Link>
                </div>
                <div className={styles.navItem}>
                    <Link className={styles.link} href="/orders">Orders</Link>
                </div>
            </div>
        </nav>
    </div>
  );
}
