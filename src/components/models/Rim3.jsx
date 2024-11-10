import { useGLTF } from '@react-three/drei'

const Rim3 = (props) => {
  const { nodes, materials } = useGLTF('/models/rim3.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.rim3.geometry} material={materials.rimShield} position={[0.002, 0.362, -0.063]} scale={1.609} />
    </group>
  )
}

useGLTF.preload('/rim3.glb')

export default Rim3