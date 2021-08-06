import React from 'react'
import './SecondComponent.scss'

const SecondComponent = () => {
const state = [
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
  {
  img: 'assets/1.png',
  },
]


return (
<div className='container2'>

  {state.map((d) => (
    <div className='sect'>
      <div className='image-cover'>
        <img src={d.img} alt='welcome'/>
      </div>
    </div>
  ))}
</div>
)
}

export default SecondComponent
