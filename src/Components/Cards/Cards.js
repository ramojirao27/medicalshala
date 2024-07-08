import React from 'react';
import './Cards.css';
import logo from '../../assets/logo.png';
import abha from '../../assets/ABHA.svg';
import healthexpert from '../../assets/healthexpert.svg'
import Shop from '../../assets/Shop.svg';
import healthjourney from '../../assets/healthjourney.svg';

const Cards =()=>{
    return(
        <div className='cardsSection'>
            <h2 className='cardfirstHeading'>ELEVATING LIVES THROUGH INFORMED HEALTH CHOICES</h2>
            <img className='logo' src={logo} alt='logo'/>
            <h1 className='cardsecondHeading'>Empowering<span> YOU</span> with a unified healthcare platform for informed health choices.</h1>
            <div className='mainCards'>
                <div className='card'>
                    <img className='cardImage'src={abha} alt=''/>
                    <h2 className='cardHeading'>ABHA</h2>
                    <p className='cardData'>Create your ABHA ID on the YORE Care app and manage your health anytime, anywhere in India.</p>
                </div>
                <div className='card'>
                    <img className='cardImage' src={healthexpert} alt=''/>
                    <h2 className='cardHeading'>Health Expert</h2>
                    <p className='cardData'>Healthcare at your fingertips – order medicines, book lab tests online, & get doctor's consultation.</p>
                </div>
                <div className='card'>
                    <img className='cardImage' src={Shop} alt=''/>
                    <h2 className='cardHeading'>Shop</h2>
                    <p className='cardData'>Buy diverse range of healthcare products, elevate your shopping satisfaction to new heights.</p>
                </div>
                <div className='card'>
                    <img className='cardImage' src={healthjourney} alt=''/>
                    <h2 className='cardHeading'>Health Journey</h2>
                    <p className='cardData'>Centralize medical documents, and get secure and convenient digital access.</p>
                </div>
            </div>
        </div>
    )
}
export default Cards;