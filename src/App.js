import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import dance from './img/dance.png';
import cry from './img/cry.png';
import mariachi from './img/mariachi.png';
import concert from './img/concert.png';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Message from './components/Message/Message';
import Options from './components/Options/Options';

function useOnScreen(options){
  const [ref, setRef] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);

    if (ref) {
      observer.observe(ref);
    }

    return ( () => {
      if (ref) {
        observer.unobserve(ref);
      }
    })
  }, [ref, options]);
  console.log(visible);

  return [setRef, visible];
}

function App() {
  const [setRef, visible] = useOnScreen({ threshold: 0.2 });
  const [index, setIndex] = useState(0);
  const imgArray = [{img: dance, label:"Dance", imgAlt:"People dancing"}, 
                    {img: cry, label:"Cry", imgAlt:"Sunset with guitars"}, 
                    {img: mariachi, label:"Remember", imgAlt:"Mariachi singing"}, 
                    {img: concert, label:"Sing along", imgAlt:"Concert"}];

  function handleClick(){
    if (index === imgArray.length - 1){
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  
  return (
    <div className="App karaoke_bgr">
        <Header />
        <div ref={setRef} onClick={()=>handleClick()}>
            <Message visible={visible} img={imgArray[index].img} label={imgArray[index].label} imgAlt={imgArray[index].imgAlt}/>
          </div>
        <Options date="Friday, September 24th"/>
        <Footer />
    </div>
  );
}
export default App;
