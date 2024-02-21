import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import DashBoard from "./Pages/DashBoard";
import { store } from "./Store/index";
import { Provider } from "react-redux";
import TicketDetail from "./Pages/TicketDetail";
import "./index.css";
import ProtectedRoute from "./utils/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashBoard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/ticket/:id",
    element: <TicketDetail />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
