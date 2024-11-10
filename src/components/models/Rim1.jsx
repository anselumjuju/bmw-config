import { useGLTF } from '@react-three/drei'

const Rim1 = (props) => {
  const { nodes, materials } = useGLTF('/models/rim1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.rim1.geometry} material={materials.rimShield} position={[0.001, 0.361, -0.064]} scale={1.624} />
    </group>
  )
}

useGLTF.preload('/rim1.glb')

export default Rim1