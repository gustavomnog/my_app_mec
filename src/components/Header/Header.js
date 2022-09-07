import { Container, ContainerLeft, ContainerRight, Logo } from './styles'
import logo from './logoHeader.svg'

const Header = () => {
  return (
    <>
      <Container>
        <ContainerLeft>PROPOSTA COMERCIAL</ContainerLeft>
        <ContainerRight>
          <Logo src={logo} />
        </ContainerRight>
      </Container>
    </>
  )
}

export default Header