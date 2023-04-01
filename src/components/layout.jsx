import Navbar from "@/components/navbar";
import styles from "@/styles/layout.module.css";
import loaderGif from "../../public/loader.gif";
import { useLoader } from "@/context/loader-context";
import { Footer } from "@/components/footer";

export default function Layout({ children }) {
  const { showLoader } = useLoader();

  return (
    <div className={styles.appContainer}>
      <header className={styles.appHeader}>
        <Navbar />
      </header>
      <section className={styles.appBody}>{children}</section>
      <Footer className={styles.appFooter} />
      {showLoader && (
        <div className={styles.appLoader}>
          <div
            className={styles.loaderBody}
            style={{
              backgroundImage: `url(${loaderGif.src})`,
            }}
          ></div>
        </div>
      )}
    </div>
  );
}
