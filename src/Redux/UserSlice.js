import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        fullName: '',
        email: '',
        address: '',
        phone: '',
        password: ''
    },
    reducers: {
        setUserDetails: (state, action) => {
            const { fullName, email, address, phone, password } = action.payload;
            state.fullName = fullName;
            state.email = email;
            state.address = address;
            state.phone = phone;
            state.password = password;
        }
    }
});

export const { setUserDetails } = userSlice.actions;

export default userSlice.reducer;
