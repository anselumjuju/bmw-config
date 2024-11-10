import { useState } from 'react';
import { Canvas } from '@react-three/fiber'
import { PerformanceMonitor } from '@react-three/drei'
import { Experience, Overlay } from './containers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


const App = () => {
  const [perfSucks, degrade] = useState(false)
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  return (
    <>
      <div className='w-full h-dvh max-h-screen bg-[#fad0cf]'>
        <Canvas
          gl={{ preserveDrawingBuffer: true }}
          shadows={isMobile ? false : true}
          dpr={[1, isMobile ? 1 : 2]}
          eventPrefix="client"
          camera={{ position: [20, 0.9, 20], fov: isMobile ? 30 : 26 }}>
          <PerformanceMonitor onDecline={() => degrade(true)} onIncline={() => degrade(false)} />
          <color attach="background" args={['#fad0cf']} />
          <Experience perfSucks={perfSucks} />
        </Canvas>
        <div className='w-full h-dvh overflow-hidden absolute inset-0 pointer-events-none'><Overlay /></div>
      </div>
      <ToastContainer
        autoClose={2000}
        pauseOnFocusLoss={false}
      />
    </>
  );
}



export default App;
