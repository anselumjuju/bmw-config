import { useGLTF } from '@react-three/drei'

const TailLights = (props) => {
  const { nodes, materials } = useGLTF('/models/taillight.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.001, 0.856, -2.086]} scale={0.797}>
        <mesh geometry={nodes.KIT00_FRONT_BRAKE_A008.geometry} material={materials.Black} />
        <mesh geometry={nodes.KIT00_FRONT_BRAKE_A008_1.geometry} material={materials['M4xNME_GlassClear.005']} />
        <mesh geometry={nodes.KIT00_FRONT_BRAKE_A008_2.geometry} material={materials['M4xNME_taillight_top.001']} />
        <mesh geometry={nodes.KIT00_FRONT_BRAKE_A008_3.geometry} material={materials['M4xNME_LS8.001']} />
        <mesh geometry={nodes.KIT00_FRONT_BRAKE_A008_4.geometry} material={materials['M4xNME_brake.002']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/taillight.glb')

export default TailLights
