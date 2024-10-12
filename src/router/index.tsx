import { lazy, LazyExoticComponent } from "react"
import {useRoutes} from "react-router-dom"
import { SuspenseComponent as Suspense } from "../utils"

const Home: LazyExoticComponent<any>  = lazy(()=> import('../pages/home/Home'))
const About: LazyExoticComponent<any> = lazy(()=> import("../pages/about/About"))
const Company: LazyExoticComponent<any> = lazy(()=> import("../pages/company/Company"))
const Detail: LazyExoticComponent<any> = lazy(()=> import("../pages/detail/Detail"))
const Layout: LazyExoticComponent<any> = lazy(()=> import("../pages/layout/Layout"))

const Routers = ()=>{
    return useRoutes([
        {
            path: "/",
            element: <Suspense><Layout/></Suspense>,
            children: [
                {
                    path: "/",
                    element: <Suspense><Home/></Suspense>
                },
                {
                    path:"/about",
                    element: <Suspense><About/></Suspense>,
                    children: [
                        {
                            path: "company",
                            element: <Suspense><Company/></Suspense>
                        },
                    ]
                },
                {
                    path: "/product/:id",
                    element: <Suspense><Detail/></Suspense>
                },
            ]
        },
        {
            path: "*",
            element: <Suspense><h2>404</h2></Suspense>
        }
    ])
}

export default Routers