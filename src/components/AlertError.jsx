import React from 'react'

const AlertError = ({children}) => {
  return (
    <div className='text-center my-4 bg-red-600 text-white font-bold p-3'>{children}</div>
  )
}

export default AlertError