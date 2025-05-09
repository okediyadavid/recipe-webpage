import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import NewProduct from "./pages/NewProduct";
import ProductDetail from "./pages/ProductDetail";
import ProductCategory from "./pages/ProductsCategory";
import Mycart from "./pages/MyCart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./pages/ProtectedRoute";
import { store, persistor } from "./redux/store";
import { AuthcontextProvider } from "./context/AuthContext";

// 🔒 Protected Routes Wrapper
const ProtectedRoutes = ({ children, requireAdmin = false }) => (
  <ProtectedRoute requireAdmin={requireAdmin}>{children}</ProtectedRoute>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <AllProducts /> },
      {
        path: "products/new",
        element: (
          <ProtectedRoutes requireAdmin>
            <NewProduct />
          </ProtectedRoutes>
        ),
      },
      { path: "products/:id", element: <ProductDetail /> },
      { path: "category/:productCategory", element: <ProductCategory /> },
      {
        path: "carts",
        element: (
          <ProtectedRoutes>
            <Mycart />
          </ProtectedRoutes>
        ),
      },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthcontextProvider>
      {" "}
      {/* 🔥 Ensure AuthContext is available */}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </AuthcontextProvider>
  </React.StrictMode>
);

// 🌍 Log Web Vitals Performance
reportWebVitals(console.log);
