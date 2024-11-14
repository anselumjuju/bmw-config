/* eslint-disable react-refresh/only-export-components */
import { Body, Calipers, Rim1, Rim2, Rim3, BrakeDisc, Exhaust, Frame, HeadlightGlasses, Logos, Window, UnderTray, Tyre, TailLights, ExhaustCover, Headlights, NumberPlate } from "./models"
import { useSnapshot } from 'valtio'
import { store } from '../store'

const BMW = () => {
	const { bodyColor, rim, caliperColor } = useSnapshot(store)
	return (
		<group position={[0.5, 0, 0]}>
			<Body bodyColor={bodyColor} />
			<BrakeDisc />
			<Calipers caliperColor={caliperColor} />
			<Exhaust />
			<ExhaustCover />
			<Frame />
			<NumberPlate />
			<HeadlightGlasses />
			<Headlights />
			<Logos />
			<group visible={rim === 'rim1'}><Rim1 /></group>
			<group visible={rim === 'rim2'}><Rim2 /></group>
			<group visible={rim === 'rim3'}><Rim3 /></group>
			<TailLights />
			<Tyre />
			<UnderTray />
			<Window />
		</group>
	)
}


export default BMW