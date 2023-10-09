import React from "react";

function Box(props) {

  const styles = {
    backgroundColor: props.on ? '#00f' : 'transparent'
  }

  return (
    <div style={styles} className='box' onClick={props.toggle}></div>
  )
}
export default Box