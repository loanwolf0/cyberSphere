// import React from 'react'
// import './Internship.css'
// import pic1 from  '../../assets/hero 2.jpg'


// const Internship = ({img,des}) => {
//   return (
//     <div className='Internship-container'>

//       <div className="intern-img">
//         <img src={pic1} alt="Img" class="custom-image" />
//       </div>

//       <div className="intern-des">
//         <p className=' text-justify text-[rgba(0,0,0,0.8)]'>
//           {des}
//         </p>
//       </div>

//       <div className="inten-btn">
//         <button class="styled-button">APPLY</button>
//       </div>

//     </div>
//   )
// }

// export default Internship



import React from 'react';
import './Internship.css';
import pic1 from  '../../assets/hero 2.jpg';

const Internship = ({ title1,title2,img, des }) => {
  const openGoogleForm = () => {
    // Replace 'YOUR_GOOGLE_FORM_URL' with the actual URL of your Google Form
    const googleFormUrl = 'https://forms.gle/aAtSYu51tkK7xizFA';
    window.open(googleFormUrl, '_blank');
  };

  return (
    <div className='Internship-container'>
      <div className="intern-img">
        <img src={pic1} alt="Img" className="custom-image" />
      </div>

      <div className="intern-heding">
        <h2 className="text-xl md:text-xl mt-10 w-100 font-bold p-1 md:p-2 rounded-sm bg-[rgba(0,0,0,0.075)]"> <span className='text-[rgb(254,192,71)]'>{title1}</span> {title2} </h2>
      </div>

      <div className="intern-des">
        <p className='text-justify text-[rgba(0,0,0,0.6)]'>
          {des}
        </p>
      </div>

      <div className="inten-btn">
        <button className="styled-button" onClick={openGoogleForm}>APPLY</button>
      </div>
    </div>
  );
};

export default Internship;
