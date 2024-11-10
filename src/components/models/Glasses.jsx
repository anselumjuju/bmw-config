import { useGLTF } from '@react-three/drei'

const Glasses = (props) => {
  const { nodes } = useGLTF('/models/glasses.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.glasses.geometry} position={[0.001, 0.939, 0.038]} scale={1.95}>
        <meshPhysicalMaterial
          transmission={0.5}
          opacity={0.6}
          transparent={true}
          roughness={0.5}
          metalness={0}
          envMapIntensity={1}
          clearcoat={0.1}
          color="#000"
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/glasses.glb')

export default Glasses