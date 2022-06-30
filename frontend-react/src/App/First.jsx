import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function First() {
    const navigate = useNavigate()
  return (
    <div>
      <input type="text" placeholder='Enter Email' />
      <button onClick={() => navigate("/done")}>Go</button>
    </div>
  )
}
