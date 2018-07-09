import React from 'react'
import '../styles/common.scss'

class AccordionIcon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {condition: false}

    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {
    this.setState({
      condition: !this.state.condition
    })  
  }

  render () {
    return (
      <div className="accordion-wrapper">
        <AccordionIconChild 
        className={ this.state.condition ? "button toggled" : "button" }
        toggleClassName={ this.handleClick }
        >
          Search with Icons
        </AccordionIconChild>
        <div className="hide">
          <ul className="list-icons">
            <li>
              <img src={require('../images/wifi.png')} className="image-icon" />
              :Wifi
            </li>
            <li>
              <img src={require('../images/dog.png')} className="image-icon" />
              :Pets friendly
            </li>
            <li>
              <img src={require('../images/furniture.png')} className="image-icon" />
              :furnished
            </li>
            <li>
              <img src={require('../images/data.png')} className="image-icon" />
              :Wealth of data
            </li>
            <li>
              <img src={require('../images/laundry.png')} className="image-icon" />
              :laundry
            </li>
            <li>
              <img src={require('../images/parking.png')} className="image-icon" />
              :Parking
            </li>
            <li>
              <img src={require('../images/bed.png')} className="image-icon" />
              :Bed
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

class AccordionIconChild extends React.Component {
  render() {
    return (
      <div
        className={this.props.className}
        onClick={this.props.toggleClassName}
      >
        {this.props.children}
      </div>
    )
  }
}

export default AccordionIcon;

