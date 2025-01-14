import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css';
import MainLayout from "./layout/mainLayout";
import HomePage from "./pages/homePage";
import Partner from "./pages/partner";
import Shop from "./pages/shop";
import SinglePage from "./pages/singlePage";
import Cart from "./pages/cart";
import NewItems from "./pages/newItems";
import BestProduct from "./component/bestProduct";
import BestSellers from "./pages/bestSellers";

function App() {
    const route = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
                {
                    path: "/partner/:slug",
                    children: [
                        {
                            index: true,
                            element: <Partner />,
                        },
                        {
                            path: "shop/:id",
                            children: [
                                {
                                    index: true,
                                    element: <Shop />,
                                },
                                {
                                    path: "page/:pageNumber",
                                    element: <Shop />,
                                },

                            ],

                        },
                    ],
                },
                {
                  path: "newItems",
                  element: <NewItems/>,
                },
                {
                  path: 'bestSellers',
                    element: <BestSellers/>,
                },
                {
                    path: 'card',
                    element: <Cart/>
                },
                {
                    path: "catalog/:id",
                    element: <SinglePage/>
                }
            ],
        },
    ]);

    return <RouterProvider router={route} />;
}

export default App;
