import React, { Component } from "react"
import { PropTypes } from "react"

const requiredComponent = PropTypes.oneOfType([
  PropTypes.element,
  PropTypes.func,
]).isRequired

export default class Picture extends Component {

  static propTypes = {
    img: PropTypes.object,
    title: PropTypes.string,
    Loader: requiredComponent,
    Title: requiredComponent,
  }

  render() {
    const {
      img,
      title,
      Loader,
      Title,
    } = this.props

    return (
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
  }
}
