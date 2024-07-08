import React from "react";
import './SectionThree.css';
import sectionThreevideo from '../../assets/sectionThree.mp4';
import SSL from '../../assets/SSL.png';
import FHIR from '../../assets/FHIR.png';
 
const SectionThree =()=>{
    return(
        <div className='thirdSection'>
            <h2 className='sectionfirstHeading'>STREAMLINED WELLNESS SOLUTIONS HEALTHCARE AT YOUR FINGERTIPS</h2>
            <h2 className='sectionsecondHeading'>Connect Your Health Records With ABHA ID & Track Your Health Journey</h2>
            <h2 className="sectionthirdHeading">Experience a cutting-edge solution for effortless management of your health records. gain secure and convenient digital access.</h2>
            <div className='thirdmainSection'>
                
                    <div className="cardsAndimage">
                        <div className="cards">

                            <div className="thirdsectionCard">
                                <h12>Seamless Digital Documentation</h12>
                            </div>
                            <div className="thirdsectionCard">
                                <h12>Streamlined Healthcare Management</h12>
                            </div>
                            <div className="thirdsectionCard">
                                <h12>Empower Your Healthcare</h12>
                            </div>
                        </div>
                        <video className="thirdsectionImage">
                            <source src={sectionThreevideo} type="video/mp4" />
                        </video> 

                     </div>
                    <div className="assoiation">
                            <h2>In Assosiation with </h2>

                        <img src={SSL} alt="googlefit" />
                        <img src={FHIR} alt="applehealth" />
                    </div>
                
            </div>
            <div className="thirdsectionBtns">
                <button className="createAbha">ACCESS LOCKER</button>
                <button className="knowMore">Know more</button>
            </div>
            
            </div>
    )
}
export default SectionThree;