import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div className='p-4 text-center text-3xl bg-gray-700 text-white'>User: {userId}</div>
  )
}

export default User