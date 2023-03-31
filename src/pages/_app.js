import Layout from "@/components/layout";
import { LoaderProvider } from "@/context/loader-context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <LoaderProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LoaderProvider>
  );
}
