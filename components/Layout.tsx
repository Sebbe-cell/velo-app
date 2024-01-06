import { Sora } from "@next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

import Header from "../components/Header";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <div
      className={`${sora.variable} font-sora relative`}
    >
      <Header />
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;
