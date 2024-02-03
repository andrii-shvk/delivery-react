import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { OthersPage } from "@/pages/OthersPage";
import { PizzasPage } from "@/pages/PizzasPage";
import { RollsPage } from "@/pages/RollsPage";

const routerNavigations = [
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "/pizzas",
        element: <PizzasPage />
    },
    {
        path: "/rolls",
        element: <RollsPage />
    },
    {
        path: "/others",
        element: <OthersPage />
    },
    {
        path: "*",
        element: <NotFoundPage />
    }
];

export {routerNavigations};