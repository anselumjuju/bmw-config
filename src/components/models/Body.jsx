import { useGLTF } from '@react-three/drei';
import TransitionMaterial from '../../utils/TransitionMaterial';
import { useCustomGLTF } from '../../utils/functions';

const Body = (props) => {
  const { nodes } = useCustomGLTF('/models/body.glb');

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.body.geometry}>
        <TransitionMaterial
          transitionColor={props.bodyColor}
          transitionTime={0.4}
          metalness={0.024}
          roughness={0.7}
          clearcoat={1}
          clearcoatRoughness={0.25}
        />
      </mesh>
    </group>
  );
};

useGLTF.preload('/models/body.glb');

export default Body;
