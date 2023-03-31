import Navbar from "@/components/navbar";
import styles from "@/styles/layout.module.css";
import loaderGif from "../../public/loader.gif";
import { useLoader } from "@/context/loader-context";
import { Footer } from "./Footer";

export default function Layout({ children }) {
  const {showLoader} = useLoader();

  return (
    <div className={styles.appContainer}>
      <header className={styles.appHeader}>
        <Navbar />
      </header>
      <section className={styles.appBody}>{children}</section>
      <Footer className={styles.appFooter}/>
      {showLoader && (
        <div className={styles.appLoader}>
          <div
            style={{
              backgroundImage: `url(${loaderGif.src})`,
              backgroundRepeat: "no-repeat",
              backgroundClip: "padding-box",
              width: "100px",
              height: "100px",
            }}
          ></div>
        </div>
      )}
    </div>
  );
}
