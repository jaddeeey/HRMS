import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "../pages/Login/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import Benefits from "../pages/Benefits/Benefits";
// import Performance from "../pages/Performance/Performance";


export default function AppRoutes() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
            path="/"
            element={<Login />}
        />

        {/* Dashboard */}
        <Route
            path="/dashboard"
            element={
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
            }
        />


        {/* Benefits */}
        <Route
            path="/benefits"
            element={
                <ProtectedRoute>
                    <Benefits />
                </ProtectedRoute>
            }
        />


        {/* Performance */}
        {/* 
        <Route
          path="/performance"
          element={<Performance />}
        />
        */}


        {/* 404 Page */}
        <Route
          path="*"
          element={
            <div className="flex min-h-screen items-center justify-center">
              <h1 className="text-3xl font-bold">
                Wala pani, huwat lang diha !
              </h1>
            </div>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}