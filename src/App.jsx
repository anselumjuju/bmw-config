import { Canvas } from '@react-three/fiber'
import { AccumulativeShadows, Center, Environment, OrbitControls, RandomizedLight, Html } from '@react-three/drei'
import { Overlay } from './containers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { BMW } from './components';
import { Suspense, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

const Loader = () => {
  return <Html><p className='w-full h-full absolute inset-0 flex items-center justify-center text-black text-2xl font-medium text-center'>Loading...</p></Html>
}

const App = () => {
  const isMobile = useMemo(() => /Mobi|Android/i.test(navigator.userAgent), []);
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
        <div className='w-full h-dvh overflow-hidden absolute inset-0 pointer-events-none z-10'><Overlay /></div>
        <Canvas
          gl={{ antialias: false, preserveDrawingBuffer: false }}
          shadows={!isMobile}
          dpr={[1, 1.5]}
          camera={{ position: [4, 0, 6], fov: 35 }}
        >
          <Suspense fallback={<Loader />}>
            <group position={[0, -0.75, 0]}>
              <Center top>
                <BMW />
              </Center>
              {!isMobile && (
                <AccumulativeShadows>
                  <RandomizedLight position={[2, 5, 5]} />
                </AccumulativeShadows>
              )}
            </group>
          </Suspense>

          <OrbitControls
            makeDefault
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
            autoRotate={!isMobile}
            autoRotateSpeed={isMobile ? -0.2 : -0.3}
            dampingFactor={0.05}
            enableZoom={false}
            enablePan={false}
          />

          <Environment
            preset="dawn"
            background
            backgroundBlurriness={isMobile ? 0.6 : 0.9}
            resolution={isMobile ? 256 : 512}
            lowQuality={isMobile}
          />
        </Canvas>
      </div>
      <ToastContainer
        autoClose={2000}
        pauseOnFocusLoss={false}
      />
    </>
  );
}






export default App;
