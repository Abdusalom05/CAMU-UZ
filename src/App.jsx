import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ActaCamu from "./pages/ActaCamu";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";
import Aloqa from "./pages/Aloqa";
import Bakalaviriat from "./pages/Bakalaviriat";
import Fotografiyalar from "./pages/Fotografiyalar";
import HalqaroBolim from "./pages/HalqaroBolim";
import Hodisalar from "./pages/Hodisalar";
import Maqolalar from "./pages/Maqolalar";
import Qabul from "./pages/Qabul";
import Rahbariyat from "./pages/Rahbariyat";
import SongiYangiliklar from "./pages/SongiYangiliklar";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  const routes = createBrowserRouter([
    {
      element: <Home />,
      path: "/",
      index: true,
      errorElement: <Error />,
    },
    {
      element: <ActaCamu />,
      path: "ActaCamu",
      errorElement: <Error />,
    },
    {
      element: <Aloqa />,
      path: "Aloqa",
      errorElement: <Error />,
    },
    {
      element: <Bakalaviriat />,
      path: "Bakalaviriat",
      errorElement: <Error />,
    },
    {
      element: <Fotografiyalar />,
      path: "Fotografiyalar",
      errorElement: <Error />,
    },
    {
      element: <HalqaroBolim />,
      path: "HalqaroBolim",
      errorElement: <Error />,
    },
    {
      element: <Hodisalar />,
      path: "Hodisalar",
      errorElement: <Error />,
    },
    {
      element: <Maqolalar />,
      path: "Maqolalar",
      errorElement: <Error />,
    },
    {
      element: <Qabul />,
      path: "Qabul",
      errorElement: <Error />,
    },
    {
      element: <Rahbariyat />,
      path: "Rahbariyat",
      errorElement: <Error />,
    },
    {
      element: <SongiYangiliklar />,
      path: "SongiYangiliklar",
      errorElement: <Error />,
    },
  ]);
  return (
    <>
      <Header />
      <RouterProvider router={routes} />
      <Footer />
    </>
  );
}

export default App;
