import { useGLTF } from '@react-three/drei'
import { useCustomGLTF } from '../../utils/functions'

const Tyre = (props) => {
  const { nodes, materials } = useCustomGLTF('/models/tyre.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.tyres.geometry} material={materials.tyre} position={[0.001, 0.362, -0.066]} scale={1.696} />
    </group>
  )
}

useGLTF.preload('/models/tyre.glb')

export default Tyre