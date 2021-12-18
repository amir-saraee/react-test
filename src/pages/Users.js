import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserList from '../components/Users/UserList'
import { fetchUsers } from '../store/userActions'

function Users() {
  const users = useSelector((state) => state.user.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return <UserList users={users} />
}

export default Users
