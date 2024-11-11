import { useGLTF } from '@react-three/drei'

const Logos = (props) => {
  const { nodes, materials } = useGLTF('/models/logos.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.logo.geometry} material={materials.logo} position={[0.001, 0.666, -0.161]} scale={2.19} />
    </group>
  )
}

useGLTF.preload('/models/logos.glb')

export default Logos