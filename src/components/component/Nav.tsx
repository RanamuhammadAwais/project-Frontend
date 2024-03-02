import React from 'react'
import { Button } from '../ui/button'

function Nav() {
  return (
    <section >
    <div className='flex justify-between'>
      <Button className='rounded-full m-7 text-3xl'>Logo</Button> 
    
        <ul className='m-7 flex'>
            <li className='border rounded-sm mx-5 p-3'>Contact Us</li>
            <li className='border rounded-full mx-5 p-3'>EN</li>
            <li className='border rounded-lg mx-5p-3 p-3' >Dark/Light </li>
            <li className='border rounded-full mx-5 p-3'>John</li>

        </ul>
    </div>

    </section>
  )
}

export default Nav
