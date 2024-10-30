import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import { Mesh } from 'three'
import { useSnapshot } from 'valtio'
import { store } from '../store'
import TransitionMaterial from '../utils/MeshTransitionMaterial'

export const BMW = (props: GroupProps) => {
  const { nodes, materials } = useGLTF('/models/bmw.glb')
  const { bodyColor, rim, caliperColor } = useSnapshot(store)
  return (
    <group {...props} dispose={null}>
      {/* Body */}
      <mesh castShadow geometry={(nodes.body as Mesh).geometry} >
        <TransitionMaterial
          transitionColor={bodyColor}
          transitionTime={0.4}
          metalness={0.024}
          roughness={0.7}
          clearcoat={1}
          clearcoatRoughness={0.25}
        />
      </mesh>
      {/* Calipers */}
      <mesh castShadow geometry={(nodes.calipers as Mesh).geometry}>
        <TransitionMaterial
          transitionColor={caliperColor}
          transitionTime={0.4}
          metalness={0.5}
          roughness={0}
          clearcoat={1}
          clearcoatRoughness={0.25}
        />
      </mesh>
      {/* Rims */}
      <group>
        <mesh castShadow geometry={(nodes.TSR_X_RIM003002 as Mesh).geometry} material={materials.rimShield} visible={rim == 'rim1'} />
        <mesh castShadow geometry={(nodes.rim3 as Mesh).geometry} material={materials.rimShield} visible={rim == 'rim2'} />
        <mesh castShadow geometry={(nodes.rim2 as Mesh).geometry} material={materials.rimShield} visible={rim == 'rim3'} />
      </group>
      <mesh castShadow geometry={(nodes.window as Mesh).geometry} >
        <meshPhysicalMaterial
          transmission={0.9}
          opacity={0.7}
          transparent={true}
          roughness={0}
          metalness={0}
          envMapIntensity={1}
          clearcoat={0.1}
          color="#888"
        />
      </mesh>
      <mesh castShadow geometry={(nodes.tyre as Mesh).geometry} material={materials.tyre} />
      <mesh castShadow geometry={(nodes.carbonFiber as Mesh).geometry} material={materials.carbon} />
      <mesh castShadow geometry={(nodes.mudGuard as Mesh).geometry} material={materials.Black} />
      <mesh castShadow geometry={(nodes.exhaust as Mesh).geometry} material={materials.carbon} />
      <mesh castShadow geometry={(nodes.underTray as Mesh).geometry} material={materials.Black} />
      <mesh castShadow geometry={(nodes.redStrips as Mesh).geometry} material={materials.redStrips} />
      <mesh castShadow geometry={(nodes.windowFrame as Mesh).geometry} material={materials.carbon} />
      <mesh castShadow geometry={(nodes['EDITABLE_TEXT_-__LETTERS'] as Mesh).geometry} material={materials.metal_black} position={[0.205, 0.774, -2.299]} rotation={[1.831, 0.001, -3.138]} scale={1.312} />
      <mesh castShadow geometry={(nodes['EDITABLE_TEXT_-_NATION'] as Mesh).geometry} material={materials.metal_white} position={[0.253, 0.766, -2.299]} rotation={[1.831, 0.001, -3.138]} scale={1.285} />
      <mesh castShadow geometry={(nodes['EDITABLE_TEXT_-_NUMBERS'] as Mesh).geometry} material={materials.metal_black} position={[-0.046, 0.774, -2.3]} rotation={[1.831, 0.001, -3.138]} scale={1.312} />
      <group position={[0.237, 0.842, -2.279]} rotation={[1.831, 0.001, -3.138]}>
        <mesh castShadow geometry={(nodes.Cube001 as Mesh).geometry} material={materials.metal_black} />
        <mesh castShadow geometry={(nodes.Cube001_1 as Mesh).geometry} material={materials.metal_white} />
        <mesh castShadow geometry={(nodes.Cube001_2 as Mesh).geometry} material={materials.metal_blue} />
      </group>
      <mesh castShadow geometry={(nodes.star as Mesh).geometry} material={materials.metal_yellow} position={[0.243, 0.841, -2.279]} rotation={[1.831, 0.001, -3.138]} />
      <mesh castShadow geometry={(nodes.star001 as Mesh).geometry} material={materials.metal_yellow} position={[0.235, 0.84, -2.279]} rotation={[1.831, 0.001, -3.138]} />
      <mesh castShadow geometry={(nodes.star002 as Mesh).geometry} material={materials.metal_yellow} position={[0.23, 0.834, -2.281]} rotation={[1.831, 0.001, -3.138]} />
      <mesh castShadow geometry={(nodes.star003 as Mesh).geometry} material={materials.metal_yellow} position={[0.228, 0.827, -2.282]} rotation={[1.831, 0.001, -3.138]} />
      <mesh castShadow geometry={(nodes.star004 as Mesh).geometry} material={materials.metal_yellow} position={[0.23, 0.82, -2.284]} rotation={[1.831, 0.001, -3.138]} />
      <mesh castShadow geometry={(nodes.star005 as Mesh).geometry} material={materials.metal_yellow} position={[0.235, 0.815, -2.286]} rotation={[1.831, 0.001, -3.138]} />
      <mesh castShadow geometry={(nodes.star006 as Mesh).geometry} material={materials.metal_yellow} position={[0.243, 0.813, -2.286]} rotation={[1.831, 0.001, -3.138]} />
      <mesh castShadow geometry={(nodes.star007 as Mesh).geometry} material={materials.metal_yellow} position={[0.25, 0.814, -2.286]} rotation={[1.831, 0.001, -3.138]} />
      <mesh castShadow geometry={(nodes.star008 as Mesh).geometry} material={materials.metal_yellow} position={[0.256, 0.82, -2.284]} rotation={[1.831, 0.001, -3.138]} />
      <mesh castShadow geometry={(nodes.star009 as Mesh).geometry} material={materials.metal_yellow} position={[0.257, 0.827, -2.282]} rotation={[1.831, 0.001, -3.138]} />
      <mesh castShadow geometry={(nodes.star010 as Mesh).geometry} material={materials.metal_yellow} position={[0.256, 0.834, -2.28]} rotation={[1.831, 0.001, -3.138]} />
      <mesh castShadow geometry={(nodes.star011 as Mesh).geometry} material={materials.metal_yellow} position={[0.25, 0.839, -2.279]} rotation={[1.831, 0.001, -3.138]} />
      <mesh castShadow geometry={(nodes.Mesh_0072Mesh001 as Mesh).geometry} material={materials.Black} />
      <mesh castShadow geometry={(nodes.Mesh_0072Mesh001_1 as Mesh).geometry} material={materials['M4xNME_GlassClear.005']} />
      <mesh castShadow geometry={(nodes.Mesh_0072Mesh001_2 as Mesh).geometry} material={materials['M4xNME_taillight_top.001']} />
      <mesh castShadow geometry={(nodes.Mesh_0072Mesh001_3 as Mesh).geometry} material={materials['M4xNME_LS8.001']} />
      <mesh castShadow geometry={(nodes.Mesh_0072Mesh001_4 as Mesh).geometry} material={materials['M4xNME_brake.002']} />
      <mesh castShadow geometry={(nodes.Paint003 as Mesh).geometry} material={materials.carbon} />
      <mesh castShadow geometry={(nodes.Paint003_1 as Mesh).geometry} >
        <meshPhysicalMaterial
          transmission={0.9}
          opacity={0.7}
          transparent={true}
          roughness={0}
          metalness={0}
          envMapIntensity={1}
          clearcoat={0.1}
          color="#888"
        />
      </mesh>
      <mesh castShadow geometry={(nodes.Paint003_2 as Mesh).geometry} material={materials.mirror} />
      <mesh castShadow geometry={(nodes.Paint003_3 as Mesh).geometry} material={materials.signal_L} />
      <mesh castShadow geometry={(nodes.Paint003_4 as Mesh).geometry} material={materials.signal_R} />
      <mesh castShadow geometry={(nodes.Glass002 as Mesh).geometry} material={materials.Black} />
      <mesh castShadow geometry={(nodes.Glass002_1 as Mesh).geometry} material={materials.lightRunningY} />
      <mesh castShadow geometry={(nodes.Glass002_2 as Mesh).geometry} material={materials.lightFog} />
      <mesh castShadow geometry={(nodes.Glass002_3 as Mesh).geometry} material={materials.highBeam} />
      <mesh castShadow geometry={(nodes.Glass002_4 as Mesh).geometry} >
        <meshPhysicalMaterial
          transmission={0.9}
          opacity={0.7}
          transparent={true}
          roughness={0}
          metalness={0}
          envMapIntensity={1}
          clearcoat={0.1}
          color="#888"
        />
      </mesh>
      <mesh castShadow geometry={(nodes.KIT00_FRONT_BRAKE_A001 as Mesh).geometry} material={materials.chrome} />
      <mesh castShadow geometry={(nodes.KIT00_FRONT_BRAKE_A001_1 as Mesh).geometry} material={materials.misc} />
      <mesh castShadow geometry={(nodes.KIT00_FRONT_BRAKE_A001_2 as Mesh).geometry} material={materials.brakeDisc} />
      <mesh castShadow geometry={(nodes.TSR_X_RIM003002_1 as Mesh).geometry} material={materials.M4xNME_silver} />
      <mesh castShadow geometry={(nodes.Cylinder004 as Mesh).geometry} material={materials.rimShield} />
      <mesh castShadow geometry={(nodes.Cylinder004_1 as Mesh).geometry} material={materials.logo} />
      <mesh castShadow geometry={(nodes.Paint009 as Mesh).geometry} material={materials.Black} />
      <mesh castShadow geometry={(nodes.Paint009_1 as Mesh).geometry} material={materials.carbon} />
      <mesh castShadow geometry={(nodes.Interior_Geo_lodA005 as Mesh).geometry} material={materials.Black} />
      <mesh castShadow geometry={(nodes.Interior_Geo_lodA005_1 as Mesh).geometry} material={materials.carbon} />
      <mesh castShadow geometry={(nodes.Interior_Geo_lodA005_2 as Mesh).geometry} material={materials.leather} />
      <mesh castShadow geometry={(nodes.Interior_Geo_lodA005_3 as Mesh).geometry} material={materials.redStrips} />
      <mesh castShadow geometry={(nodes.Interior_Geo_lodA005_4 as Mesh).geometry} material={materials.silver} />
      <mesh castShadow geometry={(nodes.Interior_Geo_lodA005_5 as Mesh).geometry} material={materials.buttons} />
      <mesh castShadow geometry={(nodes.Interior_Geo_lodA005_6 as Mesh).geometry} material={materials.stitches} />
      <mesh castShadow geometry={(nodes.Interior_Geo_lodA005_7 as Mesh).geometry} material={materials.belts} />
      <mesh castShadow geometry={(nodes.Interior_Geo_lodA005_8 as Mesh).geometry} >
        <meshPhysicalMaterial
          transmission={0.9}
          opacity={0.7}
          transparent={true}
          roughness={0}
          metalness={0}
          envMapIntensity={1}
          clearcoat={0.1}
          color="#888"
        />
      </mesh>
      <mesh castShadow geometry={(nodes.Interior_Geo_lodA005_9 as Mesh).geometry} material={materials.Grille} />
      <mesh castShadow geometry={(nodes.Interior_Geo_lodA005_10 as Mesh).geometry} material={materials.blackGlass} />
      <mesh castShadow geometry={(nodes.Cylinder002 as Mesh).geometry} material={materials.rimShield} />
      <mesh castShadow geometry={(nodes.Cylinder002_1 as Mesh).geometry} material={materials.logo} />
      <mesh castShadow geometry={(nodes.Cylinder006 as Mesh).geometry} material={materials.Black} />
      <mesh castShadow geometry={(nodes.Cylinder006_1 as Mesh).geometry} material={materials.logo} />
      <mesh castShadow geometry={(nodes.Interior_Geo_lodA006 as Mesh).geometry} material={materials.carbon} />
      <mesh castShadow geometry={(nodes.Interior_Geo_lodA006_1 as Mesh).geometry} material={materials.silver} />
      <mesh castShadow geometry={(nodes.Interior_Geo_lodA006_2 as Mesh).geometry} material={materials.stitches} />
      <mesh castShadow geometry={(nodes.Paint014 as Mesh).geometry} material={materials.Black} />
      <mesh castShadow geometry={(nodes.Paint014_1 as Mesh).geometry} material={materials.Grille} />
      <mesh castShadow geometry={(nodes.Paint014_2 as Mesh).geometry} material={materials.carbon} />
      <mesh castShadow geometry={(nodes.Cylinder005 as Mesh).geometry} material={materials.rimShield} />
      <mesh castShadow geometry={(nodes.Cylinder005_1 as Mesh).geometry} material={materials.logo} />
    </group>
  )
}

useGLTF.preload('/models/bmw.glb')
