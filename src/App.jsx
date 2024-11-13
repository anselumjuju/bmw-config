import { Canvas } from '@react-three/fiber'
import { AccumulativeShadows, Center, Environment, OrbitControls, RandomizedLight } from '@react-three/drei'
import { Overlay } from './containers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { BMW } from './components';
import { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

const App = () => {
  return (
    <>
      <Helmet>
        <title>BMW Config - Customize Your BMW</title>

        <meta name="description" content="Customize your BMW with BMW Config, choosing from a range of colors, trims, and features for your perfect BMW." />

        <meta property="og:title" content="BMW Config" />
        <meta property="og:description" content="Customize your BMW with BMW Config, choosing from a range of colors, trims, and features for your perfect BMW." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bmw-config.vercel.app/" />
        <meta property="og:site_name" content="BMW Config" />
        <meta property="og:image" content="https://bmw-config.vercel.app/assets/thumbnail.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BMW Config" />
        <meta name="twitter:description" content="Customize your BMW with BMW Config, choosing from a range of colors, trims, and features for your perfect BMW." />
        <meta name="twitter:image" content="https://bmw-config.vercel.app/assets/thumbnail.png" />

        <link rel="canonical" href="https://bmw-config.vercel.app/" />
      </Helmet>

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
          <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} autoRotate autoRotateSpeed={-0.15} />
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
