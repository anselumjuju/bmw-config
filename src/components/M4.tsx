import { useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import { Mesh } from 'three';

export const M4 = (props: GroupProps) => {
  const { nodes, materials } = useGLTF('/models/m4.glb');

  return (
    <group {...props} dispose={null} castShadow>
      <mesh geometry={(nodes.window as Mesh).geometry} material={materials.M4xNME_GlassClear} />
      <mesh geometry={(nodes.tyre as Mesh).geometry} material={materials['Scene_-_Root.002']} />
      <mesh geometry={(nodes.brakeCalipers as Mesh).geometry} material={materials['amdb11_caliper.002']} />
      <mesh geometry={(nodes.rim3 as Mesh).geometry} material={materials.M4xNME_Black} />
      <mesh geometry={(nodes.rim2 as Mesh).geometry} material={materials.M4xNME_Black} />
      <mesh geometry={(nodes.body as Mesh).geometry} material={materials.M4xNME_Paint} />
      <mesh geometry={(nodes.cherrier_underbody003 as Mesh).geometry} material={materials.M4xNME_mechanical} />
      <mesh geometry={(nodes.cherrier_underbody003_1 as Mesh).geometry} material={materials.M4xNME_silver} />
      <mesh geometry={(nodes.cherrier_underbody003_2 as Mesh).geometry} material={materials.M4xNME_Black} />
      <mesh geometry={(nodes.Mesh_0072Mesh003 as Mesh).geometry} material={materials.M4xNME_Black} />
      <mesh geometry={(nodes.Mesh_0072Mesh003_1 as Mesh).geometry} material={materials['M4xNME_GlassClear.005']} />
      <mesh geometry={(nodes.Mesh_0072Mesh003_2 as Mesh).geometry} material={materials['M4xNME_Black.002']} />
      <mesh geometry={(nodes.Mesh_0072Mesh003_3 as Mesh).geometry} material={materials['M4xNME_taillight_top.001']} />
      <mesh geometry={(nodes.Mesh_0072Mesh003_4 as Mesh).geometry} material={materials['M4xNME_LS8.001']} />
      <mesh geometry={(nodes.Mesh_0072Mesh003_5 as Mesh).geometry} material={materials['M4xNME_brake.002']} />
      <mesh geometry={(nodes.Untitled001 as Mesh).geometry} material={materials.M4xNME_Black} />
      <mesh geometry={(nodes.Untitled001_1 as Mesh).geometry} material={materials.M4xNME_Badge} />
      <mesh geometry={(nodes.Untitled001_2 as Mesh).geometry} material={materials.M4xNME_Carbon1} />
      <mesh geometry={(nodes.Untitled001_3 as Mesh).geometry} material={materials.M4xNME_Buttons} />
      <mesh geometry={(nodes.Untitled001_4 as Mesh).geometry} material={materials.M4xNME_Leather} />
      <mesh geometry={(nodes.Untitled001_5 as Mesh).geometry} material={materials.M4xNME_Buttons2} />
      <mesh geometry={(nodes.Untitled001_6 as Mesh).geometry} material={materials.M4xNME_stitch} />
      <mesh geometry={(nodes.Untitled001_7 as Mesh).geometry} material={materials['M4xNME_Black.006']} />
      <mesh geometry={(nodes.Untitled001_8 as Mesh).geometry} material={materials['M4xNME_Leather.002']} />
      <mesh geometry={(nodes.Untitled001_9 as Mesh).geometry} material={materials['M4xNME_silver.001']} />
      <mesh geometry={(nodes.Untitled001_10 as Mesh).geometry} material={materials['M4xNME_Buttons2.001']} />
      <mesh geometry={(nodes.Untitled001_11 as Mesh).geometry} material={materials['M4xNME_stitch.001']} />
      <mesh geometry={(nodes.Untitled001_12 as Mesh).geometry} material={materials['M4xNME_Colorable1.002']} />
      <mesh geometry={(nodes.Untitled001_13 as Mesh).geometry} material={materials['M4xNME_Carbon1.001']} />
      <mesh geometry={(nodes.Untitled001_14 as Mesh).geometry} material={materials['M4xNME_red.001']} />
      <mesh geometry={(nodes.Untitled001_15 as Mesh).geometry} material={materials['M4xNME_Black.005']} />
      <mesh geometry={(nodes.Untitled001_16 as Mesh).geometry} material={materials['M4xNME_silver.004']} />
      <mesh geometry={(nodes.Untitled001_17 as Mesh).geometry} material={materials['M4xNME_Carbon1.004']} />
      <mesh geometry={(nodes.Untitled001_18 as Mesh).geometry} material={materials['M4xNME_GlassClear.004']} />
      <mesh geometry={(nodes.Untitled001_19 as Mesh).geometry} material={materials['M4xNME_Buttons.005']} />
      <mesh geometry={(nodes.Untitled001_20 as Mesh).geometry} material={materials['M4xNME_Colorable1.005']} />
      <mesh geometry={(nodes.Untitled001_21 as Mesh).geometry} material={materials['M4xNME_Leather.005']} />
      <mesh geometry={(nodes.Untitled001_22 as Mesh).geometry} material={materials['M4xNME_Grille3.003']} />
      <mesh geometry={(nodes.Untitled001_23 as Mesh).geometry} material={materials['M4xNME_hud2.003']} />
      <mesh geometry={(nodes.Untitled001_24 as Mesh).geometry} material={materials['M4xNME_Grille2.003']} />
      <mesh geometry={(nodes.Untitled001_25 as Mesh).geometry} material={materials['M4xNME_Black.008']} />
      <mesh geometry={(nodes.Untitled001_26 as Mesh).geometry} material={materials['M4xNME_Black.007']} />
      <mesh geometry={(nodes.Engine003 as Mesh).geometry} material={materials.M4xNME_EngineB} />
      <mesh geometry={(nodes.Engine003_1 as Mesh).geometry} material={materials.M4xNME_EngineA} />
      <mesh geometry={(nodes.Engine003_2 as Mesh).geometry} material={materials.M4xNME_Grille3} />
      <mesh geometry={(nodes.Engine003_3 as Mesh).geometry} material={materials.M4xNME_Paint} />
      <mesh geometry={(nodes.Paint011 as Mesh).geometry} material={materials.M4xNME_Black} />
      <mesh geometry={(nodes.Paint011_1 as Mesh).geometry} material={materials.M4xNME_GlassClear} />
      <mesh geometry={(nodes.Paint011_2 as Mesh).geometry} material={materials.mirror} />
      <mesh geometry={(nodes.Paint011_3 as Mesh).geometry} material={materials.M4xNME_signal_L} />
      <mesh geometry={(nodes.Paint011_4 as Mesh).geometry} material={materials.M4xNME_signal_R} />
      <mesh geometry={(nodes.Glass010 as Mesh).geometry} material={materials.M4xNME_GlassClear} />
      <mesh geometry={(nodes.Glass010_1 as Mesh).geometry} material={materials.M4xNME_Black} />
      <mesh geometry={(nodes.Glass010_2 as Mesh).geometry} material={materials.M4xNME_Lights} />
      <mesh geometry={(nodes.Glass010_3 as Mesh).geometry} material={materials.M4xNME_runningY} />
      <mesh geometry={(nodes.Glass010_4 as Mesh).geometry} material={materials.M4xNME_fog} />
      <mesh geometry={(nodes.Glass010_5 as Mesh).geometry} material={materials.M4xNME_highbeam} />
      <mesh geometry={(nodes.Paint014 as Mesh).geometry} material={materials.M4xNME_GlassClear} />
      <mesh geometry={(nodes.Paint014_1 as Mesh).geometry} material={materials.M4xNME_fogred} />
      <mesh geometry={(nodes.Paint014_2 as Mesh).geometry} material={materials.M4xNME_Black} />
      <mesh geometry={(nodes.Paint014_3 as Mesh).geometry} material={materials.M4xNME_Grille7} />
      <mesh geometry={(nodes.Paint014_4 as Mesh).geometry} material={materials.M4xNME_brake} />
      <mesh geometry={(nodes.Paint014_5 as Mesh).geometry} material={materials.M4xNME_Grille5} />
      <mesh geometry={(nodes.Paint014_6 as Mesh).geometry} material={materials.M4xNME_silver} />
      <mesh geometry={(nodes.Paint014_7 as Mesh).geometry} material={materials.M4xNME_Blackint} />
      <mesh geometry={(nodes.Paint014_8 as Mesh).geometry} material={materials.M4xNME_mechanical} />
      <mesh geometry={(nodes.Paint014_9 as Mesh).geometry} material={materials.mirror} />
      <mesh geometry={(nodes.Paint014_10 as Mesh).geometry} material={materials['M4xNME_Paint2.002']} />
      <mesh geometry={(nodes.Paint014_11 as Mesh).geometry} material={materials['M4xNME_Carbon1.001']} />
      <mesh geometry={(nodes.Paint014_12 as Mesh).geometry} material={materials['M4xNME_Black.002']} />
      <mesh geometry={(nodes.Paint014_13 as Mesh).geometry} material={materials['M4xNME_lowhighbeam.001']} />
      <mesh geometry={(nodes.Paint014_14 as Mesh).geometry} material={materials['M4xNME_Black.003']} />
      <mesh geometry={(nodes.Paint014_15 as Mesh).geometry} material={materials['M4xNME_Carbon1.002']} />
      <mesh geometry={(nodes.Paint014_16 as Mesh).geometry} material={materials.M4xNME_Paint2} />
      <mesh geometry={(nodes.Paint014_17 as Mesh).geometry} material={materials.M4xNME_Buttons} />
      <mesh geometry={(nodes.Paint014_18 as Mesh).geometry} material={materials.M4xNME_Colorable1} />
      <mesh geometry={(nodes.Paint014_19 as Mesh).geometry} material={materials.M4xNME_Leather} />
      <mesh geometry={(nodes.Paint014_20 as Mesh).geometry} material={materials.M4xNME_Grille4} />
      <mesh geometry={(nodes.Paint014_21 as Mesh).geometry} material={materials.logo} />
      <mesh geometry={(nodes.Paint014_22 as Mesh).geometry} material={materials['M4xNME_Leather.002']} />
      <mesh geometry={(nodes.Paint014_23 as Mesh).geometry} material={materials['M4xNME_silver.001']} />
      <mesh geometry={(nodes.Paint014_24 as Mesh).geometry} material={materials['M4xNME_Buttons2.001']} />
      <mesh geometry={(nodes.Paint014_25 as Mesh).geometry} material={materials['mirror.001']} />
      <mesh geometry={(nodes.Paint014_26 as Mesh).geometry} material={materials['M4xNME_stitch.001']} />
      <mesh geometry={(nodes.Paint014_27 as Mesh).geometry} material={materials.M4xNME_net} />
      <mesh geometry={(nodes.Paint014_28 as Mesh).geometry} material={materials['M4xNME_Buttons.002']} />
      <mesh geometry={(nodes.Paint014_29 as Mesh).geometry} material={materials.M4xNME_badge_csl} />
      <mesh geometry={(nodes.KIT00_FRONT_BRAKE_A009 as Mesh).geometry} material={materials['amdb11_misc_chrome.002']} />
      <mesh geometry={(nodes.KIT00_FRONT_BRAKE_A009_1 as Mesh).geometry} material={materials['amdb11_misc.002']} />
      <mesh geometry={(nodes.KIT00_FRONT_BRAKE_A009_2 as Mesh).geometry} material={materials['amdb11_brake.002']} />
      <mesh geometry={(nodes.Carbon1_Geo_lodA001 as Mesh).geometry} material={materials['M4xNME_Black.002']} />
      <mesh geometry={(nodes.Carbon1_Geo_lodA001_1 as Mesh).geometry} material={materials['M4xNME_Leather.002']} />
      <mesh geometry={(nodes.Carbon1_Geo_lodA001_2 as Mesh).geometry} material={materials['M4xNME_silver.001']} />
      <mesh geometry={(nodes.Carbon1_Geo_lodA001_3 as Mesh).geometry} material={materials['M4xNME_Paint2.002']} />
      <mesh geometry={(nodes.Carbon1_Geo_lodA001_4 as Mesh).geometry} material={materials['M4xNME_stitch.001']} />
      <mesh geometry={(nodes.Carbon1_Geo_lodA001_5 as Mesh).geometry} material={materials['M4xNME_Colorable1.002']} />
      <mesh geometry={(nodes.Carbon1_Geo_lodA001_6 as Mesh).geometry} material={materials['M4xNME_Carbon1.001']} />
      <mesh geometry={(nodes.TSR_X_RIM003001 as Mesh).geometry} material={materials.M4xNME_Black} />
      <mesh geometry={(nodes.TSR_X_RIM003001_1 as Mesh).geometry} material={materials.M4xNME_silver} />
      <mesh geometry={(nodes.Cylinder as Mesh).geometry} material={materials.logo} />
      <mesh geometry={(nodes.Cylinder_1 as Mesh).geometry} material={materials.M4xNME_Black} />
    </group>
  );
};

useGLTF.preload('/models/m4.glb');
