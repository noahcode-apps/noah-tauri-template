import Home from "@/pages/home";
import { type RouteObject, createHashRouter } from "react-router-dom";

export const routes: RouteObject[] = [
	{
		path: "/",
		Component: Home,
	},
];

export const router = createHashRouter(routes);
