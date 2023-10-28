import React from 'react'
import './Waterdrop.css'


const Waterdrop = () => {
  return (
    <div className="main-water">
      <h2 className="text-3xl md:text-4xl mb-5 w-100 font-bold p-3 md:p-6 rounded-xl bg-[rgba(0,0,0,0.075)]"> <span className='text-[rgb(254,192,71)]'>This</span>  is What We <span className='text-[rgb(104,68,202)]' > Offer !</span>  </h2>
    <div className='container'>
      <div className="drop" style={{ '--clr': '#ff0f5b' }}>
        <div className="content">
          <h2 id='a'>01</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident id illo doloremque iste, inventore itaque quia. Temporibus magnam reiciendis amet rem alias, eum pariatur labore cum eveniet ipsa iure totam!</p>
          <a href="#">Read More</a>
        </div>
      </div>

     <div className="drop" style={{ '--clr': '#be01fe' }}>
        <div className="content">
          <h2 id='b'>01</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident id illo doloremque iste, inventore itaque quia. Temporibus magnam reiciendis amet rem alias, eum pariatur labore cum eveniet ipsa iure totam!</p>
          <a href="#">Read More</a>
        </div>
     </div>

      <div className="drop" style={{ '--clr': '#01b4ff' }}>
        <div className="content">
          <h2 id='c'>01</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident id illo doloremque iste, inventore itaque quia. Temporibus magnam reiciendis amet rem alias, eum pariatur labore cum eveniet ipsa iure totam!</p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Waterdrop