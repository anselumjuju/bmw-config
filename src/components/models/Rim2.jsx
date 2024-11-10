import { useGLTF } from '@react-three/drei'

const Rim2 = (props) => {
  const { nodes, materials } = useGLTF('/models/rim2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.rim2.geometry} material={materials.rimShield} position={[0.001, 0.362, -0.063]} scale={1.61} />
    </group>
  )
}

useGLTF.preload('/rim2.glb')

export default Rim2