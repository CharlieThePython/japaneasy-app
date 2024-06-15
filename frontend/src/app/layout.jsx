import "@/src/styles/Index.css";
import "@/src/styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Login } from "../components/Global/Login";
import Header from "../components/Global/Header";
import Menu from "../components/Global/Menu";
import Footer from "../components/Global/Footer";
import { useSession } from "next-auth/react";
import Providers from "../components/Global/Providers";

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <Login />
          <Header />
          <Menu />
          {children}
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
