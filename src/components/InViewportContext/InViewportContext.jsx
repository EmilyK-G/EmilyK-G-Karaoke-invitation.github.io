import React, { createContext, useState, useEffect} from 'react';

const InViewportContext = createContext();

const ContextProvider = ({children}) => {
    const [inViewport, setInViewport] = useState(false)

    useEffect(()=>{
        function isInViewport(showImg) {
    
            const rect = showImg.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        
            );
        }
        
        const showImg = document.querySelector('.show-on-scroll');
        
        document.addEventListener('scroll', function () {
            isInViewport(showImg) ? setInViewport(true) : setInViewport(false);
        });
    }, []);
    return (
        <InViewportContext.Provider value={{inViewport, setInViewport}}>
          {children}
        </InViewportContext.Provider>
      );
}
export { ContextProvider, InViewportContext };