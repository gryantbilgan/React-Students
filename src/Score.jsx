import React from 'react'
import './style.css'

export default function Score({ date, score }) {
  return (
    <div>
        <p className='Date'>Date: {date}</p>
        <p className='Score'>Score: {score}</p>
    </div>
  )
}
