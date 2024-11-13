import { useGLTF } from '@react-three/drei'
import { useCustomGLTF } from '../../utils/functions'

const Rim2 = (props) => {
  const { nodes, materials } = useCustomGLTF('/models/rim2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.rim2.geometry} material={materials.rimShield} />
    </group>
  )
}

useGLTF.preload('/models/rim2.glb')

export default Rim2
