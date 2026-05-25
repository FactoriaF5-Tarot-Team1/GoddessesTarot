import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      {/* <Header /> */}

      <main>
        <Outlet />
      </main>

      {/* <Footer /> */}
    </>
  );
}
