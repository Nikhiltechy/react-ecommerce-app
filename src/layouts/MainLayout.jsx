import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <Navbar />

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;