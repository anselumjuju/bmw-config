import { useGLTF } from '@react-three/drei'

const Glasses = (props) => {
  const { nodes } = useGLTF('/models/glasses.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.glasses.geometry}>
        <meshPhysicalMaterial
          transmission={0.9}
          opacity={0.5}
          transparent={true}
          roughness={1}
          metalness={0}
          envMapIntensity={1}
          clearcoat={0.1}
          color="#000"
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/glasses.glb')

export default Glasses