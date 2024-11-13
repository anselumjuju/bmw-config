import { useGLTF } from '@react-three/drei'
import { useCustomGLTF } from '../../utils/functions'

const NumberPlate = (props) => {
  const { nodes, materials } = useCustomGLTF('/models/numberplate.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.011, 0.801, -2.291]} scale={0.26}>
        <mesh geometry={nodes.KIT00_FRONT_BRAKE_A007.geometry} material={materials.metal_black} />
        <mesh geometry={nodes.KIT00_FRONT_BRAKE_A007_1.geometry} material={materials.metal_white} />
        <mesh geometry={nodes.KIT00_FRONT_BRAKE_A007_2.geometry} material={materials.metal_blue} />
        <mesh geometry={nodes.KIT00_FRONT_BRAKE_A007_3.geometry} material={materials.metal_yellow} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/numberplate.glb')

export default NumberPlate