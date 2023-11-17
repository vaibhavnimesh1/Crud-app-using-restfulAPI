import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./components/Browse.jsx";
import Error from "./components/Error.jsx";

const approuter = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/browse", element: <Browse /> },
  { path: "/error", element: <Error /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  <Provider store={store}>
    <RouterProvider router={approuter} />
  </Provider>
  // </React.StrictMode>,
);
