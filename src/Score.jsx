import React from 'react'

export default function Score({ date, score }) {
  return (
    <div>
        <p>Date: {date}</p>
        <p>Score: {score}</p>
    </div>
  )
}
