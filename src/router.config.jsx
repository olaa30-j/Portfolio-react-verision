import { createBrowserRouter } from "react-router-dom";
import MainView from "./views/MainView";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Portfolio, { loader } from "./components/protfolio/Portfolio";
import Service from "./components/service/Service";

export const RouterConfig = createBrowserRouter([
    {
        path:'',
        element: <MainView />,
        children:[
            {
                index:true,
                element: <Home/>
            },
            {
                path:'about',
                element:<About/>
            },
            {
                path:'service',
                element:<Service/>
            },
            {
                path:'contact',
                element:<Contact/>
            },
            {
                path:'portfolio',
                element:<Portfolio/>,
                loader: loader
            }
        ]
    }
])