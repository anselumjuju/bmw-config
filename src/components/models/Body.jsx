import { useGLTF } from '@react-three/drei'
import TransitionMaterial from '../../utils/TransitionMaterial'

const Body = (props) => {
  const { nodes } = useGLTF('/models/body.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow geometry={nodes.body.geometry} position={[0.001, 0.776, -0.16]} scale={2.258}>
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
  )
}

useGLTF.preload('/body.glb')

export default Body