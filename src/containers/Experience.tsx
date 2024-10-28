import { AccumulativeShadows, PresentationControls, RandomizedLight } from '@react-three/drei';
import { M4 } from './M4';
import Env from './Env';

const Experience = ({ perfSucks }: { perfSucks: boolean }) => {
	return (
		<>
			<PresentationControls global polar={[0, 0]} azimuth={[-Math.PI / 1.5, Math.PI / 1.5]} snap={{ mass: 1, tension: 100 }} cursor={false}>
				<group position={[0, -0.5, 0]} rotation={[0, -0.75, 0]}>
					<M4 />
					<AccumulativeShadows frames={100} alphaTest={0.2} opacity={0.7} color="white" scale={20} position={[0, 0.03, 0]}>
						<RandomizedLight amount={8} radius={6} ambient={0.5} intensity={1} position={[-1.5, 2.5, -2.5]} bias={0.001} />
					</AccumulativeShadows>
				</group>
			</PresentationControls>
			<Env perfSucks={perfSucks} />
		</>
	)
}


export default Experience;
