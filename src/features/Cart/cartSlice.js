import cartApi from '@/api/cartApi'
import orderApi from '@/api/orderApi'
import { common } from '@/utils/common'
import { payloadCreator } from '@/utils/helper'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getCart = createAsyncThunk(
   'cart/getCart',
   payloadCreator(cartApi.get)
)
export const updateCart = createAsyncThunk(
   'cart/updateCart',
   payloadCreator(cartApi.update)
)
export const createOrder = createAsyncThunk(
   'cart/createOrder',
   payloadCreator(orderApi.create)
)

const cart = createSlice({
   name: 'cart',
   initialState: {
      _id: null,
      getting: false,
      current: [],
      purchaseProducts: []
   },
   reducers: {
      removeCartItem: (state, action) => {
         state.current = state.current.filter(
            item => item._id !== action.payload._id
         )
      },
      addPurchaseProducts: (state, action) => {
         state.purchaseProducts = action.payload
      }
   },
   extraReducers: {
      [getCart.fulfilled]: (state, action) => {
         console.log('cart: ', action.payload.data)
         state._id = action.payload.data._id
         state.current = action.payload.data.products
         state.getting = false
         common.resetCartInLocalStorage()
      },
      [getCart.pending]: (state, action) => {
         state.getting = true
      }
      // TODO: reset cart after logout
      // [logout.fulfilled]: state => {
      //   state.current = []
      // }
   }
})

const cartReducer = cart.reducer
export const { removeCartItem, addPurchaseProducts } = cart.actions
export default cartReducer
