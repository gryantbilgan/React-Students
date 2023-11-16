import React from 'react'
import Score from './Score'
import './style.css'

export default function Student({ student }) {
  return (
    <div>
      <h2 className='StudentName'>{student.name}</h2>
      <p className='StudentBio'>{student.bio}</p>
      <h3 className='ScoreTitle'>Score:</h3>
      {student.scores.map((score, idx) => (<Score key={idx} date={score.date} score={score.score}/>))}
      <hr />
    </div>
  )
}
