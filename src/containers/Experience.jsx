import { AccumulativeShadows, PresentationControls, RandomizedLight } from '@react-three/drei';
import Env from './Env';
import { BMW } from '../components';

const Experience = ({ perfSucks }) => {
	return (
		<>
			<PresentationControls global rotation={[0, -0.35, 0]} polar={[0, 0]} azimuth={[-Math.PI / 1.5, Math.PI / 1.5]} snap={{ mass: 1, tension: 100 }} cursor={false}>
				<group position={[0.5, -0.5, 0]} rotate={[0, 0, 0]}>
					<BMW />
					<AccumulativeShadows frames={10} alphaTest={0.2} opacity={0.9} color="white" scale={7} position={[0, 0.01, 0]}>
						<RandomizedLight amount={8} radius={6} ambient={0.5} intensity={1} position={[-1.5, 2.5, -2.5]} bias={0.001} />
					</AccumulativeShadows>
				</group>
			</PresentationControls>
			<Env perfSucks={perfSucks} />
		</>
	)
}


export default Experience;
