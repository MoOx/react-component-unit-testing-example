import React from "react"
import { PropTypes } from "react"

const Component = ({
  img,
  title,
  Loader,
  Title,
}) => (
  <div>
    {
      (!img || !img.src) && Loader &&
      <Loader />
    }
    {
      img && img.src &&
      <img src={ img.src } alt={ img.alt }/>
    }
    {
      title && Title &&
      <Title text={ title } />
    }
  </div>
)

Component.propTypes = {
  img: PropTypes.object,
  title: PropTypes.string,
  Loader: PropTypes.func.isRequired,
  Title: PropTypes.func.isRequired,
}

Component.displayName = "Picture"

export default Component
