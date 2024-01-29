import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../const";

export const fetchCart = createAsyncThunk(
    'cart/fetchCart',
    async (_,{ getState, rejectWithValue}) => {
        const state = getState();
        const token = state.auth.accessToken;
        try {
            const response = await fetch(`${API_URL}api/cart`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            if (!response.ok) {
                throw new Error('Не удалось загрузить содержимое корзины');
            }
            return response.json();
        } catch (error) {
           return rejectWithValue(error.message)
        }
    }
)

export const addProductToCart = createAsyncThunk(
    'cart/addProductToCart',
    async (productData,{ getState, rejectWithValue}) => {
        const state = getState();
        const token = state.auth.accessToken;
        try {
            const response = await fetch(`${API_URL}api/cart/products`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(productData)
            });
            if (!response.ok) {
                throw new Error('Не удалось добавить товар в корзину');
            }
            return response.json();
        } catch (error) {
           return rejectWithValue(error.message)
        }
    }
)

const cartSlice = createSlice({
    name: 'cart', 
    initialState: {
        products: [],
        totalPrice: 0,
        totalCount: 0,
        loadingFetch: false,
        loadingAdd: false,
        loadingUpdate: false,
        loadingRemove: false,
        error: null,    
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCart.pending, (state) => {
            state.loadingFetch = true;
            state.error = null;
        })
        .addCase(fetchCart.fulfilled, (state, action) => {
            state.products = action.payload;
            state.loadingFetch = false;
            state.error = null;
        })
        .addCase(fetchCart.rejected, (state, action) => {
            state.loadingFetch = false;
            state.error = action.error.message;
        })
        .addCase(addProductToCart.pending, (state) => {
            state.loadingAdd = true;
            state.error = null;
        })
        .addCase(addProductToCart.fulfilled, (state, action) => {
            state.products.push(action.payload);
            state.loadingAdd = false;
            state.error = null;
        })
        .addCase(addProductToCart.rejected, (state, action) => {
            state.loadingAdd = false;
            state.error = action.error.message;
        })
    }

})

export default cartSlice.reducer;