import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/user"
          element={
            <div>
              <Outlet />
            </div>
          }
        >
          <Route index element={<span>Login</span>} />
          <Route path="/user/new" element={<span>Register</span>} />
        </Route>

        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate replace={true} to="/app/home" />} />
          <Route path="/app/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
