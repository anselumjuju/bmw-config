import { useGLTF } from '@react-three/drei'

const Exhaust = (props) => {
  const { nodes, materials } = useGLTF('/models/exhaust.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.exhaust.geometry} material={materials.carbon} position={[0.001, 0.339, -2.312]} scale={0.413} />
    </group>
  )
}

useGLTF.preload('/models/exhaust.glb')

export default Exhaust
