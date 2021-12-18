import React from 'react'
import styled from 'styled-components'
import UserCard from './UserCard'

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const UserList = ({ users }) => {
  return (
    <Box>
      {users && users.map((user) => <UserCard key={user.id} user={user} />)}
    </Box>
  )
}

export default UserList
