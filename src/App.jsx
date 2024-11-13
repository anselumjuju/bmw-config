import { Canvas } from '@react-three/fiber'
import { AccumulativeShadows, Center, Environment, OrbitControls, RandomizedLight } from '@react-three/drei'
import { Overlay } from './containers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { BMW } from './components';
import { Suspense } from 'react';

const App = () => {
  return (
    <>
      <div className='w-full h-dvh max-h-screen bg-[#b7a8ca]'>
        <Canvas gl={{ antialias: false, preserveDrawingBuffer: true }} shadows camera={{ position: [4, 0, 6], fov: 35 }}>
          <Suspense fallback={null}>
            <group position={[0, -0.75, 0]}>
              <Center top>
                <BMW />
              </Center>
              <AccumulativeShadows>
                <RandomizedLight position={[2, 5, 5]} />
              </AccumulativeShadows>
            </group>
          </Suspense>
          <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} autoRotate autoRotateSpeed={-0.5} />
          <Environment preset="dawn" background backgroundBlurriness={9} />
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
