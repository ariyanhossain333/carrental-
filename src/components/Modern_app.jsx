import React from 'react'

const Modern_app = () => {
  return (
    <div className='modern'>
      <div className="modern-left">
        <img height={300} width={250} src={require("../components/assets/iphone-removebg-preview.png")} alt="" />
      </div>
      <div className="modern-right">
        <p className='convenient-para'>CONVENIENT INTERACTION</p>
        <h1 style={{fontSize:45}}>Modern App</h1>
        <p className='convenient-para2'>We devloped a simple and functional app. <br /> It is built in such a way as to simplify the problem  <br /> of the car selection and rental process. View <br /> the location, statement, and other information <br /> about each of the vechicle in one click.</p>
        <button className='Download-btn' >Download App</button>
    
      </div>
    </div>
  )
}

export default Modern_app
