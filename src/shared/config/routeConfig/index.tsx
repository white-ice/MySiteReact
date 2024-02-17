import { ConnectPage } from "pages/ConnectPage"
import InfoPage from "pages/InfoPage/ui"
import { MainPage } from "pages/MainPage"
import { NotFoundPage } from "pages/NotFoundPage"
import { WorkPage } from "pages/WorkPage"
import { RouteProps } from "react-router-dom"

export enum AppRouters {
	MAIN = 'main',
	INFO = 'info',
	WORK = 'work',
	CONNECT = 'connect',
	NOT_FOUND = 'notFound'
}

export const RoutePath: Record<AppRouters, string> = {
	[AppRouters.MAIN]: '/',
	[AppRouters.INFO]: '/info',
	[AppRouters.WORK]: '/work',
	[AppRouters.CONNECT]: '/connect',
	[AppRouters.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRouters, RouteProps> = {
	[AppRouters.MAIN]: {
		path: RoutePath.main,
		element: <MainPage />
	},
	[AppRouters.INFO]: {
		path: RoutePath.info,
		element: <InfoPage />
	},
	[AppRouters.WORK]: {
		path: RoutePath.work,
		element: <WorkPage />
	},
	[AppRouters.CONNECT]: {
		path: RoutePath.connect,
		element: <ConnectPage />
	},
	[AppRouters.NOT_FOUND]: {
		path: RoutePath.notFound,
		element: <NotFoundPage />
	}
}