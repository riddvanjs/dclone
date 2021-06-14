import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    _id: "",
    email: "",
    accounts: [],
    token: "",
    userName: "",
    avatar: ""
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            state._id = action.payload._id
            state.email = action.payload.email
            state.accounts = action.payload.accounts
        },
        setAccountUser: (state, action) => {
            state.userName = action.payload.userName
            state.avatar = action.payload.avatar
        },
        setUserToken: (state, action) => {
            state.token = action.payload.token
        },
        setSignOutState: (state) => {
            state.email = null
            state.accounts = null
            state.token = null
            state._id = null
            state.userName = null
        }
    }
})

export const { setUserToken, setUserLoginDetails, setSignOutState, setAccountUser } = userSlice.actions;

export const selectUserId = (state) => state.user._id;
export const selectUserEmail = (state) => state.user.email;
export const selectUserToken = (state) => state.user.token;
export const selectUserName = (state) => state.user.userName;
export const selectUserAvatar = (state) => state.user.avatar;
export const selectUserAccounts = (state) => state.user.accounts;

export default userSlice.reducer;