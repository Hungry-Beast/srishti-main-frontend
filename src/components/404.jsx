import {React} from 'react';
import Lottie from 'react-lottie';
import Error404 from '../assets/404.json';
import { Link } from 'react-router-dom'; 
 
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
    <div style={{ width: 400, height: 300 }}>
      <Lottie options={defaultOptions} />

      <Link to = '/'>
        <button className='btn font-poppins'>
          GO TO HOME
        </button>
      </Link>
    </div>
  </div>
  );
}

export default LostInSpaceAnimation;