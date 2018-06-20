import React, { Component } from 'react'
import ReactDom from 'react-dom'
import HelloComp from './components/HelloComp'

import './sass/common.scss'
import selectBox from './components/SelectBox';

document.write('<div id="root"></div>')

ReactDom.render(
  <div>
  <HelloComp />
  <select defaultValue="14to16">
    <option value="9to12">9:00-12:00</option>
    <option value="12to14">12:00-14:00</option>
    <option value="14to16">14:00-16:00</option>
    <option value="16to18">16:00-18:00</option>
  </select>
  </div>,
  document.getElementById('root')
)