import { useGLTF } from '@react-three/drei'
import TransitionMaterial from '../../utils/TransitionMaterial'
import { useCustomGLTF } from '../../utils/functions'

const Calipers = (props) => {
  const { nodes, materials } = useCustomGLTF('/models/calipers.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.calipers.geometry} material={materials.calipers} position={[0.001, 0.359, -0.239]} scale={1.39} >
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
