import { Outlet } from "react-router-dom";
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <>
      {/* <Header /> */}

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
