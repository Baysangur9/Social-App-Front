import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import {Outlet} from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
