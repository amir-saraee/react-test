import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem 0;
`

const LinkStyle = {}

const UserCard = ({ user }) => {
  return (
    <>
      {user && (
        <Card>
          <img src={user.avatar} alt='' />
          <div>
            <Link to={`/users/${user.id}`}>
              {user.firs_name} {user.last_name}
            </Link>
          </div>
          <div>{user.email}</div>
        </Card>
      )}
    </>
  )
}

export default UserCard
