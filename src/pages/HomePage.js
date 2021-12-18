import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const Card = styled.div`
  width: 300px;
  height: 300px;
  background: #ff4757;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  font-size: 22px;
  &:hover {
    opacity: 0.8;
  }
`

const HomePage = () => (
  <Box>
    <Card>
      <Link to='/users'>Users Page</Link>
    </Card>
    <Card>
      <Link to='/products'>Products Page</Link>
    </Card>
    <Card>
      <Link to='/crypto'>BlockChain Page</Link>
    </Card>
  </Box>
)

export default HomePage
