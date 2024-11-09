import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'

export default function TransitionMaterialFree(props) {
	const materialRef = useRef()

	useFrame((_, delta) =>
		easing.dampC(
			materialRef.current.color,
			props.transitionColor,
			props.transitionTime ? props.transitionTime : 0.25,
			delta
		)
	)

	return <meshPhysicalMaterial ref={materialRef} {...props} />
}
