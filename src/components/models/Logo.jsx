import { useGLTF } from '@react-three/drei'

const Logo = (props) => {
  const { nodes, materials } = useGLTF('/models/logo.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.logo.geometry} material={materials.logo} position={[0.001, 0.666, -0.161]} scale={2.19} />
    </group>
  )
}

useGLTF.preload('/logo.glb')

export default Logo