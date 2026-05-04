import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";

const Layout = () => (
  <main className="min-h-screen flex flex-col">
    <Navbar />
    <div className="flex-1">
      <Outlet />
    </div>
    <Footer />
    <FloatingActions />
  </main>
);

export default Layout;
