import React from 'react'
import Button from './Button'

const RefreshBtn = (props) => {
  return (
       <button className='btn' onClick={props.onClick} >
              Refresh
            </button>
  )
}

export default RefreshBtn
