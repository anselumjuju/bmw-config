import { useState } from 'react';
import { Canvas } from '@react-three/fiber'
import { PerformanceMonitor } from '@react-three/drei'
import { Experience, Overlay } from './containers';
import './App.css';


export function App() {
  const [perfSucks, degrade] = useState(false)
  return (
    <div className='w-full h-dvh max-h-screen bg-[#e8cdce]'>
      <div className='w-full h-full overflow-hidden absolute inset-0 z-10'><Overlay /></div>
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
    </div>
  );
}



export default App;
