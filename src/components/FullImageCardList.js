import React from 'react'
import '../styles/common.scss'

class FullImageCardList extends React.Component {
  render () {
    return (
      <ul className="full-image-list">
        <FullImageCard />
        <FullImageCard />
        <FullImageCard />
      </ul>
    )
  }
}

class FullImageCard extends React.Component {
  render () {
    return (
      <li className="list-item">
        <div className="image-wrapper">
          <img src={require('../images/one.jpg')} />
        </div>
        <div className="information-box">
          <div className="left">
            <p className="location">Vancouver</p>
            <p className="fee">$1,300</p>
          </div>
          <div className="right">
            <ul className="icons-list">
              <li className="icon">
              <img src={require('../images/wifi.png')} className="image-icon selected" />
              </li>
              <li className="icon">
              <img src={require('../images/dog.png')} className="image-icon" />
              </li>
              <li className="icon">
              <img src={require('../images/furniture.png')} className="image-icon" />
              </li>
              <li className="icon">
              <img src={require('../images/data.png')} className="image-icon" />
              </li>
              <li className="icon">
              <img src={require('../images/laundry.png')} className="image-icon" />
              </li>
              <li className="icon">
              <img src={require('../images/parking.png')} className="image-icon" />
              </li>
              <li className="icon">
              <img src={require('../images/bed.png')} className="image-icon" />
              </li>
            </ul>
          </div>
        </div>
      </li>
    )
  }
}

export default FullImageCardList