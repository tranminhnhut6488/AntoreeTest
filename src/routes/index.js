import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import SearchProductPage from "../pages/SearchProductPage/SearchProductPage";
import FavouritePage from "../pages/FavouritePage/FavouritePage";
import ViewdedRecentPage from "../pages/ViewdedRecentPage/ViewdedRecentPage";

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true, 
        isShowFooter: true,      
    },
    {
        path: '/products/:id',
        page: ProductDetailPage,
        isShowHeader: true,
        isShowFooter: true,
    },
    {
        path: '/favourites',
        page: FavouritePage,
        isShowHeader: true,
        isShowFooter: true,
    },
    {
        path: '/viewed',
        page: ViewdedRecentPage,
        isShowHeader: true,
        isShowFooter: true,
    },
    {
        path: '/search',
        page: SearchProductPage,
        isShowHeader: true,
        isShowFooter: true,
    },
    {
        path: '*',
        page: NotFoundPage,
    }
]