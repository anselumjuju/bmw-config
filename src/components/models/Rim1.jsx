import { useGLTF } from '@react-three/drei'
import { useCustomGLTF } from '../../utils/functions'

const Rim1 = (props) => {
  const { nodes, materials } = useCustomGLTF('/models/rim1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.rim1.geometry} material={materials.rimShield} />
    </group>
  )
}

useGLTF.preload('/models/rim1.glb')

export default Rim1