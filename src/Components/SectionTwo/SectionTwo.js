import React from "react";
import './SectionTwo.css';
import sectionTwovideo from '../../assets/sectionTwo.mp4';
import Appolo from '../../assets/Apollo.png';
import Redcliffe from '../../assets/Redcliffe.png';
import Medkart from '../../assets/Medkart.png';
import Zeno from '../../assets/Zeno.png';
import Metropolis from '../../assets/Metropolis.png';



const SectionTwo =()=>{
    return(
        <div className='secondSection'>
            <h2 className='sectionfirstHeading'>STREAMLINED WELLNESS SOLUTIONS HEALTHCARE AT YOUR FINGERTIPS</h2>
            <h2 className='sectionsecondHeading'>Order Medicine, Book Lab Tests, Anytime, Anywhere</h2>
            <h2 className="sectionthirdHeading">From lab booking to online medicine, access a wide range of tests and get your medications conveniently!</h2>
            <div className='secondmainSection'>
                
                    <div className="cardsAndimage">
                        <div className="cards">

                            <div className="secondsectionCard">
                                <h12>Ramoji</h12>
                            </div>
                            <div className="secondsectionCard">
                                <h12>Anusha</h12>
                            </div>
                            <div className="secondsectionCard">
                                <h12>Ramoji Love Anusha</h12>
                            </div>
                        </div>
                        <video className="secondsectionImage">
                            <source src={sectionTwovideo} type="video/mp4" />
                        </video> 

                     </div>
                    <div className="assoiation">
                            <h2>Powered By </h2>

                        <img src={Appolo} alt="googlefit" />
                        <img src={Redcliffe} alt="applehealth" />
                        <img src={Medkart} alt="applehealth" />
                        <img src={Zeno} alt="applehealth" />
                        <img src={Metropolis} alt="applehealth" />
                    </div>
                
            </div>
            <div className="thirdsectionBtns">
                <button className="createAbha">ORDER NOW</button>
                <button className="knowMore">Know more</button>
            </div>
            
            </div>
    )
}
export default SectionTwo;