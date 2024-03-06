import React from 'react'
import { Button } from '../ui/button'

function Nav() {
  return (
    // <section className='flex justify-between bg-gradient-to-b from-blue-100'>
         <section className='flex justify-between bg-gradient-to-b from-sky-100 flex-col items-center sm:flex-row'>
      <Button className='rounded-full m-7 text-3xl'>Logo</Button> 
    
        <ul className='m-7 flex'>
            <li className='border rounded-full mx-5 p-3'>Contact Us</li>
            <li className='border rounded-full mx-5 p-3'>EN</li>
            <li className='border rounded-full mx-5p-3 p-3' >Dark/Light </li>
            <li className='border rounded-full mx-5 p-3'>John</li>

        </ul>
    

    </section>
  )
}

export default Nav
