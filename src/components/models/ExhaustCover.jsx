import { useGLTF } from '@react-three/drei'

const ExhaustCover = (props) => {
  const { nodes, materials } = useGLTF('/models/exhaustcover.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.exhaustCover.geometry} material={materials.Black} position={[0, 0.398, -2.297]} scale={0.631} />
    </group>
  )
}

useGLTF.preload('/models/exhaustcover.glb')

export default ExhaustCover
