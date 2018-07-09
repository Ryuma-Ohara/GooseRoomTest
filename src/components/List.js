import React from 'react'
import '../styles/common.scss'

const listItems = ['Register for post', 'About', 'Privacy policy' ]

const List= (props) => {
  return (
    <ul className="list">
      {listItems.map((listItem) => {
        return <li className="list-item">
        {listItem}</li>
      })}      
    </ul>
  )
}


export default List