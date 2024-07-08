import React from "react";
import './SectionFour.css' ;
import SectionFourvideo from '../../assets/sectionFour.gif';
import Googlefit from '../../assets/Google.png';
import AppleHealth from '../../assets/AppleHealth.png';

const SectionFour =()=>{
    return(
        <div className='fourthSection'>
            <h2 className='sectionfirstHeading'>ABHA ID YOUR UNIQUE & TRUSTABLE HEALTH ID</h2>
            <h2 className='sectionsecondHeading'>Unlock India's Digital Health Ecosystem with Seamless Access</h2>
            <h2 className="sectionthirdHeading">Create your ABHA ID on the YORE Care app and manage your health anytime, anywhere in India.</h2>
            <div className='fourthmainSection'>
                
                    <div className="cardsAndimage">
                        <div className="cards">

                            <div className="fourthsectionCard">
                                <h2>Activity Tracker</h2>
                            </div>
                            <div className="fourthsectionCard">
                                <h2>Hydration Companion</h2>
                            </div>
                            <div className="fourthsectionCard">
                                <h2>Sleep Gaurdian</h2>
                            </div>
                        </div>
                        <img  className="fourthsectionImage"src={SectionFourvideo} alt=""/>

                     </div>
                    <div className="assoiation">
                            <h2>Sync Easily with </h2>

                        <img src={Googlefit} alt="googlefit" />
                        <img src={AppleHealth} alt="applehealth" />
                    </div>
                
            </div>
            <div className="thirdsectionBtns">
                <button className="createAbha">Connect Now</button>
                <button className="knowMore">Know more</button>
            </div>
            
            </div>
    )
}
export default SectionFour;
