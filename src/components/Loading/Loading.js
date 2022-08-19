import LoadingStyle from "./styles"

const { BallTriangle } = require("react-loader-spinner")


const Loading = () => {



  return (
    <LoadingStyle>
      <BallTriangle
        height="100"
        width="100"
        radius="5"
        color='grey'
        ariaLabel='three-dots-loading'
        wrapperStyle
        wrapperClass
      />
    </LoadingStyle>
  )
}

export default Loading