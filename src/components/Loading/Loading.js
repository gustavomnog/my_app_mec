import Container from "./styles"

const { BallTriangle } = require("react-loader-spinner")


const Loading = () => {



  return (
    <Container>
      <BallTriangle
        height="100"
        width="100"
        color='grey'
      />
    </Container>
  )
}

export default Loading