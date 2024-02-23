import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="relative h-screen w-full">
      <Header />
      <main className="layout">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
