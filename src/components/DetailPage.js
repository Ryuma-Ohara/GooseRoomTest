import React from 'react'
import ImageSlider from './ImageSlider'
import HeaderTop from './HeaderTop'
import Footer from './Footer'
import StickyFooter from './StickyFooter'

const DetailPage = () => (
  <div>
  <HeaderTop />
    <ImageSlider />
    <ul>
      <li>Available: Now</li>
      <li>Minimum: 6 months</li>
      <li>Funished: TV, Micro wave, Desk</li>
      <li>Family member: 2 kids</li>
      <li>Language: English, Japanese</li>
    </ul>
    <br />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non dui in dui porttitor vulputate et in ipsum. Quisque pharetra ullamcorper accumsan. Duis sit amet egestas mauris. Proin nec nisi non massa lacinia pellentesque id nec augue. Vivamus in ipsum nulla. Donec quis augue orci. Fusce ultrices mattis quam, id scelerisque lorem faucibus eget. Quisque est odio, convallis quis nibh a, fermentum commodo turpis. Praesent ac massa vel velit pellentesque condimentum vitae id risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <br />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non dui in dui porttitor vulputate et in ipsum. Quisque pharetra ullamcorper accumsan. Duis sit amet egestas mauris. Proin nec nisi non massa lacinia pellentesque id nec augue. Vivamus in ipsum nulla. Donec quis augue orci. Fusce ultrices mattis quam, id scelerisque lorem faucibus eget. Quisque est odio, convallis quis nibh a, fermentum commodo turpis. Praesent ac massa vel velit pellentesque condimentum vitae id risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <Footer />
    <StickyFooter />
  </div>  
)

export default DetailPage