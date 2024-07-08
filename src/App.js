import logo from './logo.svg';
import './App.css';
import Navbar from '../src/Components/Navbar/Navbar.js';
import Background from '../src/Components/Background/Background.js';
import Cards from '../src/Components/Cards/Cards.js';
import SectionOne from '../src/Components/SectionOne/SectionOne.js';
import SectionTwo from './Components/SectionTwo/SectionTwo.js';
import SectionThree from './Components/SectionThree/SectionThree.js';
import SectionFour from './Components/SectionFour/SectionFour.js';
import Reviews from './Components/Quotes/Reviews.js';
import SectionFive from './Components/SectionFive/SectionFive.js';
import SecondCards from './Components/secondCards/secondCards.js';
import Questions from './Components/Questions/Questions.js';
import Contact from './Components/Contact/Contact.js';
import Footer from './Components/Footer/Footer.js';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Background />
      <Cards />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Reviews />
      <SectionFive />
      {/* <SecondCards /> */}
      <Questions />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
