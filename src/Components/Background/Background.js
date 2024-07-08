import React from 'react';
import './Background.css';
import uhi from '../../assets/uhi.png';
import playstore from '../../assets/playstore.webp';
import appstore from '../../assets/Apple.png';




const Background =()=>{
        return(
            <div className='BackgroundSection'>
                <div className='backgroundText'>
                    <h2 className='firstHeading'>
                        India's first UHI app
                    </h2>
                    <h2 className='secondHeading'>
                        providing Accesible<br/><span className='secondSubheading'>Health and wellness<br/></span> Everyday.
                    </h2>
                    <h2 className='thirdHeading'>
                        Simply your Wellness journey with YORE<br/>care's inclusive health platform
                    </h2>
                    <button className='androidBtn'>
                    <img className='playstoreImg' src={playstore} alt='playstore'/>Google Play</button>
                    <button className='appleBtn'>
                    <img className='appstoreImg' src={appstore} alt='appstore'/>App Store</button>
                </div>
                <div className='backgroundImg'>
                    <img src={uhi} alt='backgroundImage'/>
                </div>
            </div>
        )
}

export default Background;