import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Grid, AdaptiveDpr } from '@react-three/drei';
import './App.css';
import { Experience } from './components';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';

export function App() {
  return (
    <div className='w-full h-dvh'>
      <Canvas flat shadows camera={{ position: [12, 5, 10], fov: 25 }}>
        <fog attach="fog" args={['black', 15, 30]} />
        <group castShadow={true}>
          <Experience />
        </group>
        <Grid renderOrder={-1} position={[0, 0, 0]} receiveShadow infiniteGrid cellSize={0.8} cellThickness={0.6} sectionSize={2} sectionThickness={2} sectionColor={'#f29ffb'} fadeDistance={26} />
        <OrbitControls autoRotate autoRotateSpeed={-0.075} enableZoom={false} makeDefault minPolarAngle={Math.PI / 2.075} maxPolarAngle={Math.PI / 2.075} />
        <EffectComposer>
          <Bloom luminanceThreshold={0.4} intensity={0.6} />
          <ToneMapping />
        </EffectComposer>
        <Environment background preset="sunset" backgroundBlurriness={0.7} backgroundIntensity={0.4} />
        <AdaptiveDpr pixelated />
      </Canvas>
    </div>
  );
}

export default App;
