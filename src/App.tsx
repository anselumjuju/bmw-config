import { useState } from 'react';
import { Canvas } from '@react-three/fiber'
import { Html, PerformanceMonitor } from '@react-three/drei'
import { Experience, Overlay } from './containers';
import './App.css';


export function App() {
  const [perfSucks, degrade] = useState(false)
  return (
    <div className='w-full h-dvh max-h-screen overflow-hidden'>
      <Canvas
        shadows
        dpr={[1, perfSucks ? 1.5 : 2]}
        eventPrefix="client"
        camera={{ position: [20, 0.9, 20], fov: 26 }}>
        <PerformanceMonitor onDecline={() => degrade(true)} />
        <color attach="background" args={['#f0f0f0']} />
        <Html position={[0, 0, 0]} center>
          <div className='w-full relative'> <Overlay /></div>
        </Html>
        <Experience perfSucks={perfSucks} />
      </Canvas>
    </div>
  );
}



export default App;
