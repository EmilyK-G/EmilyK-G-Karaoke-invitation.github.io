import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Message from './components/Message/Message';
import Options from './components/Options/Options';

function App() {
  return (
    <div className="App karaoke_bgr">
      <h1 className="test_h1">Hello World!</h1>
      <Header />
      <Message />
      <Options />
      <Footer />
    </div>
  );
}
export default App;
