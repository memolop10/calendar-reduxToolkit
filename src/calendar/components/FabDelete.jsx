import React from 'react'

export const FabDelete = () => {
  const handleClickNew = () => {
    console.log('hola')
  }
  return (
    <button
      className='btn btn-danger fab-danger'
      onClick={ handleClickNew }
    >
      <i className='fas fa-trash-alt'></i>
    </button>
  )
}
