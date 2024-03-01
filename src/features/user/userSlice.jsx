import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addUserLocalStorage,
  getLocalStorageUser,
  removeUserLocalStorage,
} from "../../utils/localStorage";
import {
  loginUserThunk,
  registerUserThunk,
  updateUserThunk,
} from "./userThunk";

//Initial state of user info
const initialState = {
  isLoading: false,
  user: getLocalStorageUser(),
};

//Register User
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (users, thunkAPI) => {
    return registerUserThunk("/auth/register", users, thunkAPI);
  }
);

//Login User
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (users, thunkAPI) => {
    return loginUserThunk("/auth/login", users, thunkAPI);
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (users, thunkAPI) => {
    return updateUserThunk("/auth/updateuser", users, thunkAPI);
  }
);

//User Slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isSideBarOpen = false;
      removeUserLocalStorage();
      toast.success("Logged Out 🚪");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserLocalStorage(user);
        toast.success("hello there");
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const { user } = payload;
        state.user = user;

        addUserLocalStorage(user);
        toast.success("Welcome Back " + user.name);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const { user } = payload;
        state.user = user;
        console.log(user);
        addUserLocalStorage(user);
        toast.success("Profile Updated Successfully");
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { toggleSideBar, logoutUser } = userSlice.actions;
export default userSlice.reducer;
