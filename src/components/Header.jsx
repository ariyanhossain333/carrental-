import React from 'react'
import { useState } from 'react'

const Header = () => {
  const [menuopen, setMenuopen] = useState(false)

  const getMenuStyles = (menuopen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { top: !menuopen && "-50%" }
    }
  }
  return (
    <nav className='nav-container'>
       <div className="logo">
        <img className='logoimg' height={50} src="https://img.freepik.com/free-vector/flat-design-car-dealer-logo_23-2149338508.jpg?w=740&t=st=1716299230~exp=1716299830~hmac=a6b7394853880f9be1411d109b146639e2bd372dc26c4a891722a93b798f8970" alt="logo.png" />  <br />
        <h3 style={{fontSize:20}}>Unique</h3>
        </div>
        <div className="navigation">
        <ul id='navul' style={getMenuStyles(menuopen)} className='Header-list' >
            <li>About Us</li>
            <li>Cars</li>
            <li>Futures</li>
            <li>Help</li>
            <button className='Download-btn' >Download App</button>
        </ul>
        </div>
        <div onClick={()=>setMenuopen((prev)=> !prev)} className='menubar'><i class="fa-solid fa-bars"></i></div>
       
    </nav>
  )
}

export default Header
