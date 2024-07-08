import Logo from '../../assets/logo.png';
import Facebook from '../../assets/facebook.png';
import  Instagram from '../../assets/instagram.png';
import Linkdin from '../../assets/linkedin.png';
import Twitter from '../../assets/twitter.png';
import './Footer.css';

const Footer =()=>{
    return(
        <div className="footer">
            <hr />
            <div className="footerTop">
                 
                <div className="YORE">
                    <img src={Logo} className='logo' alt=''/>
                    <p>YORE care is a Health-tech super care app to create an Intigrated Health web to degitize,Preserve Records&empower the care seeker.</p>
                </div>
                <div className="yoreCare">
                    <h3>YORE Care</h3>
                    <p>Partner</p>
                    <p>Delete Data</p>
                    <p>Blogs</p>
                    <p>Contact</p>
                </div>
                <div className="Leagal">
                    <h3>Leagal</h3>
                    <p>Terms Of Service</p>
                    <p>Primary Policy</p>
                    <p>Return& Refund Policy</p>

                </div>
                <div className="Contact">
                    <h3>Contact</h3>
                    <p>hello@yorecare.com</p>
                    <p>+91-9172216500</p>
                    <p>B/106-107, Parmanand, Ashok Nagar, Ambadi Rd, Vasai West, Maharashtra 401202</p>

                </div>
            </div>
            <div className="footerBottom">
                <hr />
                <div className='socialMedia'>
                    <img className='icon' src={Facebook} alt='facebook'/>
                    <img className='icon'src={Instagram} alt='instagram'/>
                    <img className='icon'src={Linkdin} alt='linkdin'/>
                    <img className='icon'src={Twitter} alt='twitter' />
                </div>
                <p className='copyRight'>&#169; 2024. All rights are reserved by the RR software solutions</p>
            </div>
            
        </div>
    )
}
export default Footer;