import logo from './logo.svg';
import './App.css';
import Info from './compnents/Info';
import About from './compnents/About';
import Interestes from './compnents/Interests';
import Footer from './compnents/Footer';
import './compnents/ComponentsStyle.css';

function App() {



  return (
    <div className='app-div app-div-size app-border-radius'>
      <Info />
      <About title="About" text="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn." />
      <About title="Interests" text="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic." />
      <Footer />
    </div>
  );
}

export default App;
