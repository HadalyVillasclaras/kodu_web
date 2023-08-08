import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const GsapTest = () => {
  const myElement = useRef(null);

  useEffect(() => {
    gsap.to(myElement.current, {
      duration: 2,
      x: 30,
      y: 30,
      rotation: 360,
      scale: 0.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <div ref={myElement} style={{color: "white"}}>
      This element will animate!
    </div>
  )
}

