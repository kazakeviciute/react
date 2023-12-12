// props = {title: "Spausk mane"}
import "./Button.css"
import React from "react"

class ButtonClass extends React.Component {
  render() {
    return <button className="custom-button">{this.props.title}</button>
  }
}

export default ButtonClass