import { useGLTF } from '@react-three/drei'

const Interior = (props) => {
  const { nodes, materials } = useGLTF('/models/interior.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.001, 0.693, -0.161]} scale={2.271}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials.Black} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials.carbon} />
        <mesh geometry={nodes.Cylinder006_2.geometry} material={materials.stitches} />
        <mesh geometry={nodes.Cylinder006_3.geometry} material={materials['M4xNME_GlassClear.005']} />
        <mesh geometry={nodes.Cylinder006_4.geometry} material={materials['M4xNME_taillight_top.001']} />
        <mesh geometry={nodes.Cylinder006_5.geometry} material={materials['M4xNME_LS8.001']} />
        <mesh geometry={nodes.Cylinder006_6.geometry} material={materials['M4xNME_brake.002']} />
        <mesh geometry={nodes.Cylinder006_7.geometry} material={materials.glassClear} />
        <mesh geometry={nodes.Cylinder006_8.geometry} material={materials.signal_L} />
        <mesh geometry={nodes.Cylinder006_9.geometry} material={materials.signal_R} />
        <mesh geometry={nodes.Cylinder006_10.geometry} material={materials.lightRunningY} />
        <mesh geometry={nodes.Cylinder006_11.geometry} material={materials.highBeam} />
        <mesh geometry={nodes.Cylinder006_12.geometry} material={materials.chrome} />
        <mesh geometry={nodes.Cylinder006_13.geometry} material={materials.misc} />
        <mesh geometry={nodes.Cylinder006_14.geometry} material={materials.brakeDisc} />
        <mesh geometry={nodes.Cylinder006_15.geometry} material={materials.rimShield} />
        <mesh geometry={nodes.Cylinder006_16.geometry} material={materials.Grille} />
        <mesh geometry={nodes.Cylinder006_17.geometry} material={materials.leather} />
        <mesh geometry={nodes.Cylinder006_18.geometry} material={materials.redStrips} />
        <mesh geometry={nodes.Cylinder006_19.geometry} material={materials.buttons} />
        <mesh geometry={nodes.Cylinder006_20.geometry} material={materials.belts} />
        <mesh geometry={nodes.Cylinder006_21.geometry} material={materials.blackGlass} />
        <mesh geometry={nodes.Cylinder006_22.geometry} material={materials.metal_white} />
        <mesh geometry={nodes.Cylinder006_23.geometry} material={materials.metal_blue} />
        <mesh geometry={nodes.Cylinder006_24.geometry} material={materials.metal_yellow} />
        <mesh geometry={nodes.Cylinder006_25.geometry} material={materials.silver} />
        <mesh geometry={nodes.Cylinder006_26.geometry} material={materials.tyre} />
      </group>
    </group>
  )
}

useGLTF.preload('/interior.glb')

export default Interior