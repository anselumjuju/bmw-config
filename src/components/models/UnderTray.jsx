import { useGLTF } from '@react-three/drei'
import { useCustomGLTF } from '../../utils/functions'

const UnderTray = (props) => {
  const { nodes, materials } = useCustomGLTF('/models/undertray.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow geometry={nodes.undertray001.geometry} material={materials.Black} position={[0, 0.566, -0.163]} scale={[1.612, 2.175, 2.175]} depthTest={false} depthWrite={false} renderOrder={1} />
    </group>
  )
}

useGLTF.preload('/models/undertray.glb')



export default UnderTray