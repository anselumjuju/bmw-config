/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { MeshPhysicalMaterial } from 'three';
import * as THREE from 'three';

interface TransitionMaterialProps {
	transitionColor: THREE.Color | string | number;
	transitionTime?: number;
	[key: string]: any;
}

export default function TransitionMaterial(props: TransitionMaterialProps) {
	const materialRef = useRef<MeshPhysicalMaterial>(null);

	useFrame((_, delta) => {
		if (materialRef.current) {
			easing.dampC(
				materialRef.current.color,
				props.transitionColor,
				props.transitionTime || 0.25,
				delta
			);
		}
	});

	return <meshPhysicalMaterial ref={materialRef} {...props} />;
}
