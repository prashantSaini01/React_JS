/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { id } = useParams()
  return (
    <div className='bg-green-600 text-white text-3xl text-center'>
      User: {id}
    </div>
  )
}

export default User
