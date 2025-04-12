import { lazy } from "react";

// add route paths here

export const RouterPaths = {
    Home: lazy(() => import('../pages/home/Home')),
    Login: lazy(() => import('../pages/auth/login/Login')),
    WatchList: lazy(() => import('../pages/watchlist/WatchList')),
    NotFound: lazy(() => import('../pages/not-found-404/NotFound')),
    
}