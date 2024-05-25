import '@/src/styles/Index.css'
import '@/src/styles/App.css'
import "bootstrap/dist/css/bootstrap.min.css";

import { Login } from '../components/Global/Login';
import Header from '../components/Global/Header';
import Menu from '../components/Global/Menu';
import Footer from '../components/Global/Footer';


export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
        <Login />
        <Header />
        <Menu />
        {children}
        <Footer />
        </body>
      </html>
    )
  }