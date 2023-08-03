import logo from './logo.svg';
import './App.css';
import './header.css';
import './home.css';
import Header from "./Header";
import Home from "./Home";
import PartnersLogo from './PartnersLogo';
import './partners-logo.css'
import './HowItWorks.css'
import './rating.css'
import './RatingCard.css'
import Footer from "./Footer"
import './Footer.css'
import FooterEnd from "./FooterEnd";
import './footerEnd.css'
function App() {
  return (
    <div className="App">
      <div className='app-top'>
        <Header/>
        <Home/>
      </div>
      
      <PartnersLogo />
      <Footer/>
      <FooterEnd />
    </div>
  );
}

export default App;