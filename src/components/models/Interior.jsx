import { useGLTF } from '@react-three/drei'

const Interior = (props) => {
  const { nodes, materials } = useGLTF('/models/interior.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow geometry={nodes.Cylinder006.geometry} material={materials.Black} />
      <mesh castShadow geometry={nodes.Cylinder006_1.geometry} material={materials.logo} />
      <mesh castShadow geometry={nodes.Cylinder006_2.geometry} material={materials.carbon} />
      <mesh castShadow geometry={nodes.Cylinder006_3.geometry} material={materials.silver} />
      <mesh castShadow geometry={nodes.Cylinder006_4.geometry} material={materials.stitches} />
      <mesh castShadow geometry={nodes.Cylinder006_5.geometry} material={materials['M4xNME_GlassClear.005']} />
      <mesh castShadow geometry={nodes.Cylinder006_6.geometry} material={materials['M4xNME_taillight_top.001']} />
      <mesh castShadow geometry={nodes.Cylinder006_7.geometry} material={materials['M4xNME_LS8.001']} />
      <mesh castShadow geometry={nodes.Cylinder006_8.geometry} material={materials['M4xNME_brake.002']} />
      <mesh castShadow geometry={nodes.Cylinder006_9.geometry} material={materials.glassClear} />
      <mesh castShadow geometry={nodes.Cylinder006_10.geometry} material={materials.signal_L} />
      <mesh castShadow geometry={nodes.Cylinder006_11.geometry} material={materials.signal_R} />
      <mesh castShadow geometry={nodes.Cylinder006_12.geometry} material={materials.lightRunningY} />
      <mesh castShadow geometry={nodes.Cylinder006_13.geometry} material={materials.lightFog} />
      <mesh castShadow geometry={nodes.Cylinder006_14.geometry} material={materials.highBeam} />
      <mesh castShadow geometry={nodes.Cylinder006_15.geometry} material={materials.chrome} />
      <mesh castShadow geometry={nodes.Cylinder006_16.geometry} material={materials.misc} />
      <mesh castShadow geometry={nodes.Cylinder006_17.geometry} material={materials.brakeDisc} />
      <mesh castShadow geometry={nodes.Cylinder006_18.geometry} material={materials.tyre} />
      <mesh castShadow geometry={nodes.Cylinder006_19.geometry} material={materials.rimShield} />
      <mesh castShadow geometry={nodes.Cylinder006_20.geometry} material={materials.Grille} />
      <mesh castShadow geometry={nodes.Cylinder006_21.geometry} material={materials.leather} />
      <mesh castShadow geometry={nodes.Cylinder006_22.geometry} material={materials.redStrips} />
      <mesh castShadow geometry={nodes.Cylinder006_23.geometry} material={materials.buttons} />
      <mesh castShadow geometry={nodes.Cylinder006_24.geometry} material={materials.belts} />
      <mesh castShadow geometry={nodes.Cylinder006_25.geometry} material={materials.blackGlass} />
      <mesh castShadow geometry={nodes.Cylinder006_26.geometry} material={materials.metal_black} />
      <mesh castShadow geometry={nodes.Cylinder006_27.geometry} material={materials.metal_white} />
      <mesh castShadow geometry={nodes.Cylinder006_28.geometry} material={materials.metal_blue} />
      <mesh castShadow geometry={nodes.Cylinder006_29.geometry} material={materials.metal_yellow} />
    </group>
  )
}

useGLTF.preload('/models/interior.glb')

export default Interior