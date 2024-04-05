import React from 'react';
import Lottie from 'react-lottie';
import Error404 from '../assets/404.json';
function LostInSpaceAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Error404,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ width: 400, height: 400 }}>
      <Lottie options={defaultOptions} />
    </div>
  </div>
  );
}

export default LostInSpaceAnimation;
