import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    getProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    deleteProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    deleteProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },


    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
 
    updateProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    updateProductSuccess8: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((product) => product._id === action.payload),
        1
      );
    },





    updateProductSuccess: (state, action) => {
      state.isFetching = false;
      const prdIndex = state.products.findIndex((product) => product._id === action.payload.id)
      state.products[prdIndex].title = action.payload.name
    },
    updateProductSuccess2: (state, action) => {
      state.isFetching = false;
      const prdIndex = state.products.findIndex((product) => product._id === action.payload.id)
      state.products[prdIndex].desc = action.payload.desc
    },
    updateProductSuccess3: (state, action) => {
      state.isFetching = false;
      const prdIndex = state.products.findIndex((product) => product._id === action.payload.id)
      state.products[prdIndex].price = parseInt(action.payload.price, 10);
      
    },
    updateProductSuccess4: (state, action) => {
      state.isFetching = false;
      const prdIndex = state.products.findIndex((product) => product._id === action.payload.id)
      state.products[prdIndex].categories = []
      state.products[prdIndex].categories.push(action.payload.category)
    },
    updateProductSuccess5: (state, action) => {
      state.isFetching = false;
      const prdIndex = state.products.findIndex((product) => product._id === action.payload.id)
      state.products[prdIndex].color = [] 
      state.products[prdIndex].color.push(action.payload.color)
    },
    updateProductSuccess6: (state, action) => {
      state.isFetching = false;
      const prdIndex = state.products.findIndex((product) => product._id === action.payload.id)
      state.products[prdIndex].size = [] 
      state.products[prdIndex].size.push(action.payload.size)
    },
    updateProductSuccess7: (state, action) => {
      state.isFetching = false;
      const prdIndex = state.products.findIndex((product) => product._id === action.payload.id)
      state.products[prdIndex].inStock = action.payload.stt

    },



    





    updateProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  
    addProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
    addProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductSuccess2,
  updateProductSuccess3,
  updateProductSuccess4,
  updateProductSuccess5,
  updateProductSuccess6,
  updateProductSuccess7,
  updateProductSuccess8,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} = productSlice.actions;

export default productSlice.reducer;
