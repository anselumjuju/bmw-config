import { useState } from 'react';
import { Canvas } from '@react-three/fiber'
import { PerformanceMonitor } from '@react-three/drei'
import { Experience, Overlay } from './containers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


const App = () => {
  const [perfSucks, degrade] = useState(false)
  return (
    <>
      <div className='w-full h-dvh max-h-screen bg-[#e8cdce]'>
        <Canvas
          gl={{ preserveDrawingBuffer: true }}
          shadows
          dpr={[1, perfSucks ? 1.5 : 2]}
          eventPrefix="client"
          camera={{ position: [20, 0.9, 20], fov: 26 }}>
          <PerformanceMonitor onDecline={() => degrade(true)} />
          <color attach="background" args={['#f0f0f0']} />
          <Experience perfSucks={perfSucks} />
        </Canvas>
        <div className='w-full h-full overflow-hidden absolute inset-0 pointer-events-none'><Overlay /></div>
      </div>
      <ToastContainer
        autoClose={2000}
        pauseOnFocusLoss={false}
      />
    </>
  );
}



export default App;
