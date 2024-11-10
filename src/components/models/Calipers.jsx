import { useGLTF } from '@react-three/drei'
import TransitionMaterial from '../../utils/TransitionMaterial'

const Calipers = (props) => {
  const { nodes } = useGLTF('/models/calipers.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow geometry={nodes.calipers.geometry} >
        <TransitionMaterial
          transitionColor={props.caliperColor}
          transitionTime={0.4}
          metalness={0.1}
          roughness={1}
          clearcoat={1}
          clearcoatRoughness={0.9}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/calipers.glb')

export default Calipers