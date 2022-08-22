import Container from "./styles"

const { TailSpin } = require("react-loader-spinner")


const Loading = () => {



  return (
    <Container>
      <TailSpin
        height="80"
        width="80"
        color="grey"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Container>
  )
}

export default Loading