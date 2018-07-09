import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './styles/common.scss'
import ImageCard from './components/ImageCard';
import TextButton from './components/TextButton';
import AccordionBox from './components/AccordionBox';
import HeaderTop from './components/HeaderTop';
import Footer from './components/Footer'
import SearchWithIcons from './components/SearchWithIcons';
import TopButton from './components/TopButton';

document.write('<div id="root"></div>')

ReactDom.render(
  <div>
    <HeaderTop />
    <ImageCard />
    <TextButton />
    <AccordionBox />
    <SearchWithIcons />
    <Footer />
  </div>,
  document.getElementById('root')
)
