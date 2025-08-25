import React from 'react'
import '../index.css'
const Log = () => {
  return (
    <div>
    <form className='container1'>
      <h1>SIGIN</h1>
      <div className='inputs1'>
        <input type='email' name='email' placeholder='email' required></input><br>
        </br>
        <input type='password' name='password' placeholder='password' required></input><br>
        </br>
          <button  type='submit'>Login</button>
        </div> 

    </form>
    </div>
  )
}

export default Log
