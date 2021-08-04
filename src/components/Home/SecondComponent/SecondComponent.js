import React from 'react'
import './SecondComponent.scss'

const SecondComponent = () => {
const state = [
  {
  img: 'assets/1.png',
  },
  {
  img: 'assets/2.png',
  },
  {
  img: 'assets/3.png',
  },
  {
  img: 'assets/4.png',
  },
  {
  img: 'assets/5.png',
  },
  {
  img: 'assets/6.png',
  },
  {
  img: 'assets/7.png',
  },
  {
  img: 'assets/9.png',
  },
  {
  img: 'assets/10.png',
  },
  {
  img: 'assets/11.png',
  },
  {
  img: 'assets/12.png',
  },
  {
  img: 'assets/16.png',
  },
  {
  img: 'assets/14.png',
  },
  {
  img: 'assets/15.png',
  },
]


return (
<div className='container2'>

  {state.map((d) => (
    <div className='sect'>
      <div className='cover'>
        <img src={d.img} alt='welcome'/>
      </div>
    </div>
  ))}
</div>
)
}

export default SecondComponent
