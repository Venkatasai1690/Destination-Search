// Write your code here
import {Component} from 'react'

import './index.css'

class DestinationItem extends Component {
  render() {
    const {destinationDetails} = this.props
    const {name, imgUrl} = destinationDetails
    return (
      <li className="destination-card">
        <img src={imgUrl} alt={name} className="destination-image" />
        <p className="name">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
