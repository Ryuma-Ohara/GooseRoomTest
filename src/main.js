import React, { Component } from 'react'
import ReactDom from 'react-dom'
import HelloComp from './components/HelloComp'
import Input from './components/Input.js'
import SelectBox from './components/SelectBox';
import ImageUpload from './components/ImageUpload';
import './sass/common.scss'
import MyMapComponent from './components/MyMapComponent';


document.write('<div id="root"></div>')

ReactDom.render(
  <div>
    <HelloComp />
    <SelectBox />
    <Input />
    <ImageUpload />
    <MyMapComponent isMarkerShown/>
  </div>,
  document.getElementById('root')
)
// test