import React from 'react';
import './SectionFive.css';
import uhi from '../../assets/uhi.png';
import GooglePlay from '../../assets/playstore.webp';
import Appstore from '../../assets/Apple.png';

const SectionFive =()=>{
    return(
        <div className='fifthSection'>
            <img src={uhi} alt='backgroundImage' />
            <div className='content'>
                 <h2 className='sectionfirstHeading'>Addressing All Your Needs In One Place</h2>
                 <h2 className='sectionsecondHeading'>Download App To Explore</h2>
                 
                 
                 <div className="thirdsectionBtns">
                     <button className="createAbha">
                     <img className='playstoreImage'src={GooglePlay} alt=''/>Google Play</button>
                     <button className="knowMore">
                     <img className='appstoreImage' src={Appstore} alt=''/>App Store</button>
                 </div>
            </div>
            
            </div>
    )
}

export default SectionFive;