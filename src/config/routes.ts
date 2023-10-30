import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";

interface RouteType {
    path: string,
    component: ()  => JSX.Element,
    name: string
}

const routes: RouteType[] = [
    {
        path: "",
        component: Home,
        name: "Home",
    },
    {
        path: "/about",
        component: About,
        name: "About",
    },
    {
        path: "/contact",
        component: Contact,
        name: "Contact",
    },
    {
        path: "/dashboard",
        component: Dashboard,
        name: "Dashboard",
    }
];

export default routes