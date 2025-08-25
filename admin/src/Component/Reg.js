import React from 'react'
import '../index.css'
const Reg = () => {
  return (
    <div>
        <form className='container'>
            <h1>SinUp</h1>
            <div className='input'>
                <input type='text' name='name' placeholder='firstName' required></input>
                <input type='text' name='name1' placeholder='lastName' required></input>
                 <input type='text' name='contact' placeholder='contact' required></input>
                 <input type='email' name="email" placeholder='email' required></input>
                 <input type='password' name='password' placeholder='password' required></input>
                 <button type='Submit'>Submit</button>
            </div>
        </form>
        
      this is reg page
    </div>
  )
}

export default Reg
