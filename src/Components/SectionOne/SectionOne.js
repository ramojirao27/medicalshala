import React from "react";
import './SectionOne.css';
import sectionOnevideo from '../../assets/sectionOne.mp4';
import NHA from '../../assets/NHA.png';
import ABDM from '../../assets/ABDM.png';


const SectionOne =()=>{
        return(
            <div className='firstSection'>
            <h2 className='sectionfirstHeading'>ABHA ID YOUR UNIQUE & TRUSTABLE HEALTH ID</h2>
            <h2 className='sectionsecondHeading'>Unlock India's Digital Health Ecosystem with Seamless Access</h2>
            <h2 className="sectionthirdHeading">Create your ABHA ID on the YORE Care app and manage your health anytime, anywhere in India.</h2>
            <div className='firstmainSection'>
                
                    <div className="cardsAndimage">
                        <div className="cards">

                            <div className="firstsectionCard">
                                <h12>Yore App</h12>
                            </div>
                            <div className="firstsectionCard">
                                <h12>ABHA ID</h12>
                            </div>
                            <div className="firstsectionCard">
                                <h12>Unique Identification</h12>
                            </div>
                        </div>
                        <video className="firstsectionImage">
                            <source src={sectionOnevideo} type="video/mp4" />
                        </video> 

                    </div>
                    <div className="assoiation">
                            <h2>In Assosiation with </h2>

                        <img src={NHA} alt="googlefit" />
                        <img src={ABDM} alt="applehealth" />
                    </div>
                
            </div>
            <div className="thirdsectionBtns">
                <button className="createAbha">CREATE ABHA</button>
                <button className="knowMore">Know more</button>
            </div>
            
            </div>
            
        )
}

export default SectionOne;