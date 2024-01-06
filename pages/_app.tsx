import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: any) {
  return (
    <Layout>
        <div className="h-full bg-slate-100">
          <Component {...pageProps} />
        </div>
    </Layout>
  );
}

export default MyApp;
