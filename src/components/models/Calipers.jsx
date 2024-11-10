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
          metalness={0.5}
          roughness={0}
          clearcoat={1}
          clearcoatRoughness={0.25}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/calipers.glb')

export default Calipers