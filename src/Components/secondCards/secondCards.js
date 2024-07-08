import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card1 from '../../assets/card1.jpg';
import Card2 from '../../assets/card2.jpg';
import Card3 from '../../assets/card3.jpg';
import Card4 from '../../assets/card4.jpg';
import Card5 from '../../assets/card5.png';

function secondCards() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={Card1} alt="card1"/>
          <h4>Creating a self care routine:A Guide For The Busy Adukts</h4>
          <p>In the hustle and bustle of today fast paced world, it is easy for the busy audults to...</p>
        </div>
        <div>
          <img src={Card2} alt="card2" />
          <h4>Ordering The Medicine Online: Here are the few tips to keep in mind</h4>
          <p>In today's digital world , convinience for ordering the medicine online has extented to the relm...</p>
        </div>
        <div>
          <img src={Card3} alt="card3"/>
          <h4>10 Divali Snack alternatives to satisfy your cravings </h4>
          <p>Diwali it's a festival of lights,it's a time of joy,celebration and delicious food..</p>
        </div>
        <div>
          <img src={Card4} alt="card4"/>
          <h4>Diwali and Diabetics: Managing Blood Suger and Diabetics During the Festivals</h4>
          <p>Diwali it's a festival of lights,it's a time of joy,celebration and delicious food..</p>
        </div>
        <div>
          <img src={Card5} alt="card5"/>
          <h4>ABHA ID: Empovering the patients with secure acess to the personal health records</h4>
          <p>In the digital age, access to the personal health records is essential for enuring the efficient healthcare...</p>
        </div>
        
      </Slider>
    </div>
    
    
  );
}

export default secondCards;