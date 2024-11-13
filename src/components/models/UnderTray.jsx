import { useGLTF } from '@react-three/drei'
import { useCustomGLTF } from '../../utils/functions'

const UnderTray = (props) => {
  const { nodes, materials } = useCustomGLTF('/models/undertray.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.underTray.geometry} material={materials.Black} position={[0, 0.274, -0.164]} scale={2.177} />
    </group>
  )
}

useGLTF.preload('/models/undertray.glb')

export default UnderTray