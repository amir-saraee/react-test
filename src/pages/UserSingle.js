import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import UserCard from '../components/Users/UserCard'
import { fetchUserInfo } from '../store/userActions'

const UserSingle = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.userInfo)

  useEffect(() => {
    dispatch(fetchUserInfo(id))
  }, [dispatch, id])

  return <UserCard user={user} />
}

export default UserSingle
