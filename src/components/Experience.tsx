import { CameraControls } from '@react-three/drei';
import M4 from './M4';

const Experience = () => {
  return (
    <>
      <pointLight position={[0, 2, 2]} intensity={10} />
      <ambientLight intensity={0.5} />
      <CameraControls />
      <M4 />
    </>
  );
};

export default Experience;
