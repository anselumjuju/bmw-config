import { useGLTF } from '@react-three/drei'
import { useCustomGLTF } from '../../utils/functions'

const HeadlightGlasses = (props) => {
  const { nodes } = useCustomGLTF('/models/headlightglasses.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.headlightGlasses.geometry} position={[0.001, 0.671, 1.771]} scale={0.822} >
        <meshPhysicalMaterial
          transmission={0.5}
          opacity={0.4}
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

useGLTF.preload('/models/headlightglasses.glb')

export default HeadlightGlasses