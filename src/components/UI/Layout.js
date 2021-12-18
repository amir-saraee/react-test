import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { Header, Ul, Li, Main } from './Layout.style'

function Layout() {
  const admin = useSelector((state) => state.user.admin)
  return (
    <React.Fragment>
      <Header>
        <nav>
          <Ul>
            <Li>
              <Link to='/'>Homepage</Link>
            </Li>
            <Li>
              <Link to='/users'>Users</Link>
            </Li>
            <Li>
              <Link to='/products'>Products</Link>
            </Li>
            <Li>
              <Link to='/crypto'>Cryptocurrency</Link>
            </Li>
            {admin && (
              <Li>
                <span>
                  admin: {admin.first_name} {admin.last_name}
                </span>
              </Li>
            )}
          </Ul>
        </nav>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </React.Fragment>
  )
}

export default Layout
