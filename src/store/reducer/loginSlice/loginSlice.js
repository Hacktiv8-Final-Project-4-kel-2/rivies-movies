import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "oriastanjung@gmail.com",
  password: "kamu123",
  username : 'oriastanjung'
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state) => {
      console.log(state);
    },
    changeUserName : (state,action)=>{
      state.username = action.payload
    }
  },
});

export const { login,changeUserName } = loginSlice.actions;
export default loginSlice.reducer;
