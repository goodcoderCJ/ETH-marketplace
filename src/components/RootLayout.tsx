import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <main className="flex flex-col min-h-screen ">
      <Header />
      <section className="children-container flex-1">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};

export default RootLayout;
