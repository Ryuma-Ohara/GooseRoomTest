import React from 'react'
import '../styles/common.scss'

const ImageCard = () => {
  return (
    <ul className="container">
      <li className="image-card-wrapper">  
        <img src={require('../images/one.jpg')} className="image-card" />
        <p className="box-text">Vancouver</p>
      </li>
      <li className="image-card-wrapper">  
        <img src={require('../images/one.jpg')} className="image-card" />
        <p className="box-text">Vancouver</p>
      </li>
      <li className="image-card-wrapper">    
        <img src={require('../images/one.jpg')} className="image-card" />
        <p className="box-text">Vancouver</p>
      </li>  
    </ul>    
  ); 
}

export default ImageCard;