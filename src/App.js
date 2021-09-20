import React from 'react';
import './App.css';
import dance from './img/dance.png';
import cry from './img/cry.png';
import mariachi from './img/mariachi.png';
import concert from './img/concert.png';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Message from './components/Message/Message';
import Options from './components/Options/Options';


function App() {
  return (
    <div className="App karaoke_bgr">
      <Header />
      <Message img={dance} label="Dance" img-alt="People dancing"/>
      <Message img={cry} label="Cry" img-alt="Sunset with guitars"/>
      <Message img={mariachi} label="Remember" img-alt="Mariachi singing"/>
      <Message img={concert} label="Feel and sing along" imgAlt="Concert"/>
      <Options date="Friday, September 24th"/>
      <Footer />
    </div>
  );
}
export default App;
