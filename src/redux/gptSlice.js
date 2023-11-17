import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearch: false,
    selectlangValue:"en"
  },
  reducers: {
    addgptSearchbrowse: (state) => {
      state.gptSearch = !state.gptSearch;
    },
    addSelectlangValue:(state,action)=>{
      state.selectlangValue=action.payload
    }
  },
});
export const { addgptSearchbrowse ,addSelectlangValue} = GptSlice.actions;
export default GptSlice.reducer;
