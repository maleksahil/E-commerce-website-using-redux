import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  searchTerm: "",
  filteredData: [],
};

const productSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },

    setSearchTerm(state, action) {
      const term = action.payload.toLowerCase();
      state.searchTerm = term;

      // Copy to avoid accessing revoked proxy
      const products = state.products || [];

      state.filteredData = products.filter((product) =>
        product?.name?.toLowerCase().includes(term)
      );

      // Safe logging outside of Immer draft
      console.log("Searching for:", term);
      console.log("Filtered products:", state.filteredData);
    },
  },
});

export const { setProducts, setSearchTerm } = productSlice.actions;
export default productSlice.reducer;
