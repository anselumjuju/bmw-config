/* eslint-disable react-refresh/only-export-components */
import { Body, Calipers, Interior, Glasses, Rim1, Rim2, Rim3, Logo } from "./models"
import { useSnapshot } from 'valtio'
import { store } from '../store'

const BMW = () => {
	const { bodyColor, rim, caliperColor } = useSnapshot(store)
	return (
		<group position={[0.5, 0, 0]}>
			<Body bodyColor={bodyColor} />
			<Calipers caliperColor={caliperColor} />
			<Interior />
			<Logo />
			<Glasses />
			<group visible={rim === 'rim1'}><Rim1 /></group>
			<group visible={rim === 'rim2'}><Rim2 /></group>
			<group visible={rim === 'rim3'}><Rim3 /></group>
		</group>
	)
}


export default BMW