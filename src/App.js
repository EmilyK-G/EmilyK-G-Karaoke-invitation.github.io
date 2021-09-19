import React from 'react';
import './App.css';
import dance from './img/dance.png';
import cry from './img/cry.png';
import mariachi from './img/mariachi.png';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Message from './components/Message/Message';
import Options from './components/Options/Options';

function App() {
  return (
    <div className="App karaoke_bgr">
      <Header />
      <Message img={dance} label="Dance"/>
      <Message img={cry} label="Cry"/>
      <Message img={mariachi} label="Remember"/>
      <Options />
      <Footer />
    </div>
  );
}
export default App;
