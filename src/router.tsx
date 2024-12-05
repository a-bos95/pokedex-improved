import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
]);