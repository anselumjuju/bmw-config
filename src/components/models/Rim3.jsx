import { useGLTF } from '@react-three/drei'

const Rim3 = (props) => {
  const { nodes, materials } = useGLTF('/models/rim3.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.rim3.geometry} material={materials.rimShield} />
    </group>
  )
}

useGLTF.preload('/models/rim3.glb')

export default Rim3