import { Container, ContainerLeft, ContainerRight, Logo } from './styles'
import logo from './logoHeader.svg'

const Header = () => {
  return (
    <>
      <Container>
        <ContainerLeft>
          <h1>PROPOSTA COMERCIAL</h1>
        </ContainerLeft>
        <ContainerRight>
          <Logo src={logo} />
        </ContainerRight>
      </Container>
    </>
  )
}

export default Header