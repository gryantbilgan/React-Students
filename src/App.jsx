import { useState } from 'react'
import './App.css'
import Student from './Student'
import './style.css'

const initialStudents = [
  {
    name: 'Tatsu Kuroda',
    bio: "A former legendary yakuza gang member known by the nickname 'The Immortal Dragon' and he has since retired from a life of crime to work as a full-time house husband for his wife Miku. Also, is a member of the Woman's Association with the moniker 'the Decorator', a name chosen by Fukada, one of the Eight Dragons of the Woman's Association.",
    scores: [
      {
        date: '2023-02-08',
        score: 77
      },
      {
        date: '2023-04-22',
        score: 92
      },
      {
        date: '2023-09-15',
        score: 68
      }
    ]
  },
  {
    name: 'John Wick',
    bio: "Full name is Jardani Jovonovich. A legendary and feared assassin known as the Baba Yaga, retired after completing an 'impossible task' for the Tarasov Mob. His peaceful life ends when his wife dies, and he seeks revenge for the killing of his dog and theft of his car. This leads to conflicts with the High Table, an international crime organization, after John violates their rules. Despite betrayals and challenges, he ultimately outsmarts the High Table, securing his freedom through a duel. Mortally wounded, John dies peacefully, buried next to his wife as a 'Loving Husband,' as he requested.",
    scores: [
      {
        date: '2023-12-14',
        score: 88
      },
      {
        date: '2023-01-09',
        score: 79
      },
      {
        date: '20123-02-23',
        score: 91
      },
      {
        date: '2023-03-01',
        score: 95
      }
    ]
  },
  {
    name: 'Matt Murdock',
    bio: "Blinded as a child by a radioactive substance, lawyer Matt Murdock gains heightened senses and trains to become the vigilante Daredevil. His conflicts with crime boss Wilson Fisk, the Punisher, and the Hand result in personal losses and the collapse of his law firm. After retiring, he returns to face new threats, including Elektra's resurrection and Fisk's release from prison. Despite a broken body and disillusioned mind, Daredevil defeats Fisk again, forming a new law firm with his friends. Seven years later, he represents Spider-Man, provides legal protection in a Stark Industries investigation, and aids She-Hulk in Los Angeles.",
    scores: [
      {
        date: '2023-10-11',
        score: 62
      },
      {
        date: '2023-11-24',
        score: 74
      },
      {
        date: '2023-12-19',
        score: 85
      }
    ]
  },
  {
    name: 'Bruce Wayne',
    bio: "After seeing his parents gunned down in front of him as a ten year old, Bruce Wayne dedicated himself to a lifelong journey...becoming the Batman. Batman is the superhero protector of Gotham City, a tortured, brooding vigilante dressed as a bat who fights against evil and strikes fear into the hearts of criminals everywhere. In his public identity, he is Bruce Wayne, a billionaire industrialist and notorious playboy. Although he has no superhuman abilities, he is one of the world's smartest men and greatest fighters. His physical prowess, technical ingenuity, and tactical thinking make him an incredibly dangerous opponent. He was also a founding member of the Justice League.",
    scores: [
      {
        date: '2023-06-13',
        score: 100
      },
      {
        date: '2023-08-23',
        score: 100
      },
      {
        date: '2023-10-03',
        score: 100
      }
    ]
  },
]


export default function App() {
  const [students, setStudens] = useState(initialStudents)
  return (
    <div className="App">
      <h1 className='ReactStudent'>Reactionary-Students</h1>
      {students.map((student, idx) => (<Student key={idx} student={student}/>))}
    </div>
  )
}