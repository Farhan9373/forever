import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Login from "../pages/Login";
import Forgotpass from "../pages/Forgotpass";
import Signup from "../pages/Signup";
import AdminPanel from "../pages/AdminPanel";
import Alluser from "../pages/Alluser";
import Allproduct from "../pages/Allproduct";
import CategoryProduct from "../pages/CategoryProduct";
import Productdetail from "../pages/Productdetail";
import Cartview from "../pages/Cartview";
import SearchProduct from "../pages/SearchProduct";
import Success from "../pages/Success";
import Cancel from "../pages/Cancel";
import Order from "../pages/Order";
const appRouter=createBrowserRouter([

    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/login",
                element:<Login/>
            },
           {
            path:"/forgot",
            element:<Forgotpass/>
           },
           {
            path:"/signup",
            element:<Signup/>
           },

           {
            path:"/product-category",
            element:<CategoryProduct/>
           },
           {
            path:"product/:id",
            element:<Productdetail/>
           },
           {
            path:"cart",
            element:<Cartview/>
           },
           {
            path:"success",
            element:<Success/>
           },
           {
             path:"cancel",
             element:<Cancel/>
           },
           {
            path:"search",
            element:<SearchProduct/>
           },
           {
           path:"order",
           element:<Order/>
           },
           {
            path:"/admin",
            element:<AdminPanel/>,
            children:[
                {
                    path:"all-users",
                    element:<Alluser/>
                },
                {
                    path:"all-products",
                    element:<Allproduct/>
                }
            ]
            },

           

        ]
    }
])
export default appRouter