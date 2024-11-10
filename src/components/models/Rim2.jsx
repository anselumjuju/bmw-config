import { useGLTF } from '@react-three/drei'

const Rim2 = (props) => {
  const { nodes, materials } = useGLTF('/models/rim2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow geometry={nodes.rim2.geometry} material={materials.rimShield} />
    </group>
  )
}

useGLTF.preload('/models/rim2.glb')

export default Rim2