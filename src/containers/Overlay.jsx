import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Config, Home } from '../components';

function Overlay() {
	const [showConfig, setShowConfig] = useState(false);
	const homeRef = useRef(null);
	const configRef = useRef(null);

	const handleConfigure = () => {
		gsap.to(homeRef.current, { opacity: 0, y: -50, duration: 0.5, onComplete: () => setShowConfig(true) });
	};

	const handleGoHome = () => {
		gsap.to(configRef.current, { opacity: 0, y: -50, duration: 0.5, onComplete: () => setShowConfig(false) });
	};

	useEffect(() => {
		if (showConfig) {
			gsap.fromTo(configRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5 });
		} else {
			gsap.fromTo(homeRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5 });
		}
	}, [showConfig]);

	return (
		<div className="w-dvw h-full select-none max-w-[1800px] mx-auto">
			<div className='w-full h-full' ref={homeRef} style={{ display: showConfig ? 'none' : 'block' }}>
				<Home onConfigure={handleConfigure} />
			</div>
			<div className='w-full h-full' ref={configRef} style={{ display: showConfig ? 'block' : 'none' }}>
				<Config onGoHome={handleGoHome} />
			</div>
		</div>
	);
}

export default Overlay;
