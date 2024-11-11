import { useGLTF } from '@react-three/drei'

const BrakeDisc = (props) => {
  const { nodes, materials } = useGLTF('/models/brakedisc.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.001, 0.362, -0.076]} scale={1.555}>
        <mesh geometry={nodes.KIT00_FRONT_BRAKE_A005.geometry} material={materials.chrome} />
        <mesh geometry={nodes.KIT00_FRONT_BRAKE_A005_1.geometry} material={materials.misc} />
        <mesh geometry={nodes.KIT00_FRONT_BRAKE_A005_2.geometry} material={materials.brakeDisc} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/brakedisc.glb')

export default BrakeDisc