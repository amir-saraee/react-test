import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: { users: [], userInfo: null, admin: null },
  reducers: {
    getUsers(state, action) {
      state.users = [...action.payload]
      const admin = state.users.find(
        (user) => user.email === 'emma.wong@reqres.in'
      )
      state.admin = { ...admin }
    },
    getUserInfo(state, action) {
      state.userInfo = { ...action.payload }
    }
  }
})

export const userActions = userSlice.actions

export default userSlice
