import React from 'react'

class SelectBox extends React.Component {
  render() {
    return(
      <select defaultValue="14to16" style={styles.selectBoxStyle}>
        <option value="9to12">9:00-12:00</option>
        <option value="12to14">12:00-14:00</option>
        <option value="14to16">14:00-16:00</option>
        <option value="16to18">16:00-18:00</option>
      </select>
    ); 
  }
}

const styles = {
  selectBoxStyle: {
    marginBottom: 20
  }
}

export default SelectBox;