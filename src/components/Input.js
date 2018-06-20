import React from 'react'

class Input extends React.Component {
  
  render() {
    return <input type="text" placeholder="Test" style={styles.inputStyle}/>
  }
}

const styles = {
  inputStyle: {
    display: "block",
    width: 300,
    fontSize: "16px"
  }
}

export default Input;