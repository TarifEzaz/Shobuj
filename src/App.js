import logo from './logo.svg';
import './App.css';
import WelcomeNote from './components/WelcomeNote'
import Blog from './components/Blog'
import Test from './components/Test'
import SocialMediaLinks from './components/Footer/socialMedia'
import Footer from './components/Footer/footer'
import WT from './components/WelcomeText'
import { Fragment } from 'react';

function App() {
  return (
    
    <div className="App">
      
      <WelcomeNote/>
      <Blog/>
      <Footer/>
      
      
     
    </div>
    
  );
}

export default App;
