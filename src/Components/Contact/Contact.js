import './Contact.css'
 const Contact=()=>{
        return(
            <div className="contactSection">
                <h2>Let's Get In Touch</h2>
                <p>Our team is here to help.<br/> Contact us for quick and<br/>friendly support.</p>
                <p>+91 9172216500</p>
                <p>Support@yorecare.com</p>
                <input type="text"   className='inputFeild' placeholder="Enter your Name"/>
                <input type="text"  className='inputFeild' placeholder="enter your email"/>
                <input type="text"   className='inputFeild' placeholder="enter your subject"/>
                <input type="submit" className='submitBtn' placeholder="submit"/>

            </div>
        )
}
export default Contact;