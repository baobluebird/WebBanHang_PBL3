import Home from "~/pages/Home";
import Card from "~/pages/Card";
import Cart from "~/pages/Cart";
import { HeaderOnly } from "~/components/Layout";
const publicRoutes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/cart',
        component: Cart,
        layout: HeaderOnly
    },
    {
        path: '/card',
        component: Card,
        layout: HeaderOnly
    },
]
const privateRoutes = [

]
export { privateRoutes, publicRoutes }