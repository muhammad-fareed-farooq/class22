import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import { Home } from "../pages/Home";
import { Private_Routes } from "./Private_Routes";
import Productdetail from "../pages/Productdetail";
import Details from "../pages/Details"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
           <Route path="" element={<Home />}/>
           <Route path="productdetails/:id" element={<Details />}/>
           


            {/* <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} /> */}


            {/* Private Route */}
            {/* <Route element={<Private_Routes />}>
                <Route path="" element={<Home />} />
            </Route> */}
        </Route>
    )
)


const Router_App = () => {


    return <RouterProvider router={router} />
}


export { Router_App }