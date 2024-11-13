import { useGLTF } from '@react-three/drei'
import { useCustomGLTF } from '../../utils/functions'

const Frame = (props) => {
  const { nodes, materials } = useCustomGLTF('/models/frame.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.001, 0.765, -0.161]} scale={2.271}>
        <mesh geometry={nodes.KIT00_FRONT_BRAKE_A001.geometry} material={materials.carbon} />
        <mesh geometry={nodes.KIT00_FRONT_BRAKE_A001_1.geometry} material={materials.Black} />
        <mesh geometry={nodes.KIT00_FRONT_BRAKE_A001_2.geometry} material={materials.Grille} />
        <mesh geometry={nodes.KIT00_FRONT_BRAKE_A001_3.geometry} material={materials.redStrips} />
        <mesh geometry={nodes.KIT00_FRONT_BRAKE_A001_4.geometry} material={materials.glassClear} />
        <mesh geometry={nodes.KIT00_FRONT_BRAKE_A001_5.geometry} material={materials.signal_L} />
        <mesh geometry={nodes.KIT00_FRONT_BRAKE_A001_6.geometry} material={materials.signal_R} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/frame.glb')

export default Frame