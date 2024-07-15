import React from 'react'

const Features = () => {
  return (
    <div>
    <div className="features">
    <p className='features-heading'>TAKING CARE OF EVERY CLIENT</p>
       <h1 style={{fontSize:40}}>Features</h1>
       <p className='features-para'>We are all about our client's comfort and safety.That's <br />
       why we provide the best service you can imagine.</p>
    </div>
       <div className='cards'>
             <div className="card1">
                <img height={70} src="https://th.bing.com/th?id=OIP.1ciELH3KPY0AXgDZuNhJKgHaH_&w=240&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" />
                <h3 style={{fontSize:18}}>24-hour car delivary</h3>
             </div>

             <div className="card1">
             <img height={70} src="https://cdn1.vectorstock.com/i/1000x1000/00/50/24-7-car-service-logo-vector-23460050.jpg" alt="" />
                <h3 style={{fontSize:18}}>24/7 technical <br />support</h3>
             </div>

             <div className="card1">
             <img height={70} src="https://th.bing.com/th/id/OIP.q05IyZKWrPVJ8Djk0BX4rQHaF7?rs=1&pid=ImgDetMain" alt="" />
                <h3 style={{fontSize:18}}>Premium package</h3>
             </div>

             <div className="card1">
             <img height={80} src="https://thumbs.dreamstime.com/b/shield-car-logo-vector-template-creative-design-concepts-224053578.jpg" alt="" />
                <h3 style={{fontSize:18}}>Absolute <br />confidencial</h3>
             </div>

       </div>
    </div>
  )
}

export default Features
