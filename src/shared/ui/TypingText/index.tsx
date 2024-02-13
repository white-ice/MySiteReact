import { useState, useEffect } from 'react';

export interface TypingTextProps {
	text: string;
	delay?: number;
}

export const TypingText = (props: TypingTextProps) => {
	const { text, delay = 0 } = props
	const [displayText, setDisplayText] = useState('');
	const [index, setIndex] = useState(0);
	const [onDelay, setOnDelay] = useState(false);

	setTimeout(() => {
		setOnDelay(true)
	}, delay)

	useEffect(() => {
		if (onDelay) {
			const interval = setInterval(() => {
				if (index < text.length) {
					setDisplayText(prevText => prevText + text.charAt(index));
					setIndex(prevIndex => prevIndex + 1);
				} else {
					clearInterval(interval);
				}
			}, 100); // Часовий інтервал між додаванням кожної літери

			return () => clearInterval(interval);
		}


	}, [index, text, onDelay]);

	return <>{displayText}</>;
};
