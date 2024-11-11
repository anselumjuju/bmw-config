import { useGLTF } from '@react-three/drei'

const Window = (props) => {
  const { nodes } = useGLTF('/models/window.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.window.geometry} position={[0.001, 1.105, -0.612]} scale={1.3} >
        <meshPhysicalMaterial
          transmission={0}
          opacity={1}
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

useGLTF.preload('/models/window.glb')

export default Window