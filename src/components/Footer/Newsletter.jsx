import React from 'react'
import SubHeading from '../SubHeading/SubHeading'
import './Newsletter.css'

export default function Newsletter() {
  return (
    <div className='app__newsletter'>
      <div className='app__newsletter-heading'>
        <SubHeading title="Newsletter" />
        <h1 className='headtext__cormorant'>Suscribe to Our Newsletter</h1>
        <p className='p__opensans'>And never miss latest Updates!</p>
      </div>
      <div className='app__newsletter-input flex__center'>
        <input type="email" placeholder='Enter your e-mail' />
        <button className='custom__button'>Suscribe</button>
      </div>
    </div>
  )
}
