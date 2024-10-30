import { proxy } from 'valtio'

export const store = proxy({
	bodyColor: 'white',
	rim: "rim1",
	caliperColor: 'red'
})