import React from 'react';
import './reviews.css';
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Airquotes from '../../assets/Airquotes.png';
import Airquotes2 from '../../assets/Airquotes2.png'
const Reviews =()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return(
        <div className='review'>
            <center><h2 className='ReviewHeader'>what our users say?</h2></center>
              <Slider {...settings} className='cards'>
                  <div  className='card'>
                    <img className='' src={Airquotes}/>
                    <p>YORE Care App made by ABHA creation<br/> very easy. It is a user-friendly app that <br/>empowers you to take control of your<br /> healthcare journey like never before.</p>
                    <h4>PARITOSH</h4>
                    <h10>Mumbai</h10>
                    <img src={Airquotes2} alt='' />
                  </div>
                  <div className='card'>
                     <img src={Airquotes}/>
                     <p>I used the YORE Care app to make my<br/>ABHA ID. Now it is my go-to alpp. I have<br/>saved my health documents, and synced my <br />health devices with it. Now i do not have to<br />use multiple apps.</p>
                    <h4>KETAKI</h4>
                    <h10>Mumbai</h10>
                    <img src={Airquotes2} alt='' />
                  </div>
                  <div className='card'>
                    <img src={Airquotes}/>
                    <p>I find YORE Care very helpful it's very easy<br/>for me to order medicine online from my<br/>local chemist. Their team of pharmacists is<br />outstanding!</p>
                    <h4>ANUJ</h4>
                    <h10>Mumbai</h10>
                    <img src={Airquotes2} alt='' />
                  </div>
                 
               </Slider>
            
        </div>

            
       
    )
}

export default Reviews;