import React from 'react'
import { Link } from 'react-router-dom';

//my stuff
import DropNavItems from './dropNavItems.component'

const DropBox = () => {
  return (
      <div className="dropbox-container">
          <DropNavItems>    
              <Link to='/afterschool' className='links'>Afterschool Program</Link>
              <Link to='/taekwondo'className='links'>Taekwondo</Link>
          </DropNavItems>
    </div>
  )
}

export default DropBox;