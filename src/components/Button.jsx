import React from 'react'

const Button = (props) => {

  return (
    <button className='btn' onClick={()=>{
      props.fetchData()
      props.setCurrentValue('')
    }}>
       {props?.value}
    </button>
  )
}

export default Button
