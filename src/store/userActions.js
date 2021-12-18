import axios from 'axios'
import { userActions } from './userSlice'

export const fetchUsers = () => async (dispatch) => {
  try {
    const res = await axios.get('https://reqres.in/api/users')

    dispatch(userActions.getUsers(res.data.data))
  } catch (err) {
    console.log(err)
  }
}

export const fetchUserInfo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`https://reqres.in/api/users/${id}`)
    dispatch(userActions.getUserInfo(res.data.data))
  } catch (err) {
    console.log(err)
  }
}
