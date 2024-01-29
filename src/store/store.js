import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/auth.slice';
import categoriesReducer from './categories/categories.slice';
import goodsReducer from './goods/goods.slice';
import productReducer from './product/product.slice';
import favoriteReducer from './favorite/favorite.slice';
import { apiTokenErrorMiddleware } from "./middleware";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        categories: categoriesReducer,
        goods: goodsReducer,
        product: productReducer,
        favorite: favoriteReducer,
    },
    middleware: (getDafaultMiddleware) => getDafaultMiddleware().concat(apiTokenErrorMiddleware)
})