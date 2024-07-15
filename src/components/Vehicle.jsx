import React from 'react'

const Vehicle = () => {
  return (
    <div>
      <div className='Vehicle-container'>
          <p className='Vehicle-heading'>ONLY THE BEST CARS</p>
          <h1 className='Vehicle-title'>Our Vehicle Fleet</h1>
          <p className='Vehicle-para'>We prode our customers with the most incredible diving emotions. <br /> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; That's why we love only world-class cars in our fleet.</p>
          <div className="cus-buttons">
                <button className='btn-white'>Premium</button>
                <button className='btn-white'>Coupe</button>
                <button className='btn-black'>Hypercars</button>
                <button className='btn-white'>Sportcars</button>
                <button className='btn-black'>Sedancars</button>
                <button className='btn-white'>Limousines</button>
          </div>
          <div className="car-images">
            <div className="firstRow">
              <img className='firstRowCars' src="https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <img className='firstRowCars' src="https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <img className='firstRowlastCars' src="https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
            <div className="secondRow">
              <img className='secondRowCars' src="https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <img className='secondRowCars' src="https://images.pexels.com/photos/3764986/pexels-photo-3764986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <img className='secondRowCars' src="https://images.pexels.com/photos/11396006/pexels-photo-11396006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <img className='secondRowCars' src="https://images.pexels.com/photos/9513395/pexels-photo-9513395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>

             <button className='showall'>Show All (83 models)</button>
          </div>
      </div>
    </div>
  )
}

export default Vehicle
