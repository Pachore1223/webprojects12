import React from 'react'
import{Link} from 'react-router-dom'
const Nav = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to="/home">home</Link>
            </li>
              <li>
                <Link to="/reg">Reg</Link>
            </li>
              <li>
                <Link to="/log">signup</Link>
            </li>
              <li>
                <Link to="/Contact">contact</Link>
            </li>

        </ul>
      
    </div>
  )
}

export default Nav
