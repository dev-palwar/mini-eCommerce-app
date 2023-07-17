import { createReducer } from '@reduxjs/toolkit';

export const cartReducer = createReducer(
  {
    cartItems: [],
    subTotal: 0,
    shipping: 200,
    total: 0,
    tax: 0,
  },
  {
    addToCart: (state, action) => {
      let isThereItem = false;
      let thatItem = {};

      for (let index = 0; index < state.cartItems.length; index++) {
        if (state.cartItems[index].id === action.payload.id) {
          isThereItem = true;
          thatItem = state.cartItems[index];
        }
      }
      if (isThereItem === false) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      } else {
        thatItem.quantity++;
      }
    },
    decrement: (state, action) => {
      state.cartItems.map(value => {
        if (value.id === action.payload.id) {
          if (value.quantity > 1) {
            value.quantity--;
          }
        }
      });
    },
    remove: (state, action) => {
      state.cartItems = state.cartItems.filter(
        value => value.id !== action.payload.id
      );
    },
    calculateBill: state => {
      let sum = 0;
      state.cartItems.forEach(value => {
        sum += value.price * value.quantity;
      });
      state.subTotal = sum;
      state.subTotal >= 1000 ? (state.shipping = 0) : (state.shipping = 200);
      state.tax = (state.subTotal+state.shipping)*0.18;
      state.total = sum + state.shipping + state.tax;
    },
  };
);
