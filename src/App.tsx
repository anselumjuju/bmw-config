import { Canvas } from '@react-three/fiber';
import { Experience } from './components';
import './App.css';

function App() {
  return (
    <div className='w-full h-screen overflow-hidden bg-black'>
      <Canvas>
        <color attach='background' args={['#111115']} />
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
