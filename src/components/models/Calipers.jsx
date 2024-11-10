import { useGLTF } from '@react-three/drei'
import TransitionMaterial from '../../utils/TransitionMaterial'

const Calipers = (props) => {
  const { nodes } = useGLTF('/models/calipers.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.calipers.geometry} position={[0.001, 0.359, -0.239]} scale={1.39} >
        <TransitionMaterial
          transitionColor={props.caliperColor}
          transitionTime={0.4}
          metalness={0.5}
          roughness={0}
          clearcoat={1}
          clearcoatRoughness={0.25}
        />
      </mesh>

    </group>
  )
}

useGLTF.preload('/calipers.glb')

export default Calipers