import { classNames } from 'shared/lib/classNames/classNames'
import cls from './style.module.scss'
import { useEffect, useState } from 'react';

export enum LoaderTheme {
	ICON = 'loader__icon',
	TEXT = 'loader__text',
}

interface LoaderProps {
	className?: string;
	theme?: LoaderTheme;
	text?: string;
}

export const Loader = (props: LoaderProps) => {
	const { className, text = '', theme } = props

	const [displayText, setDisplayText] = useState('');
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (index < text.length) {
				setDisplayText(prevText => prevText + text.charAt(index));
				setIndex(prevIndex => prevIndex + 1);
			} else {
				clearInterval(interval);
			}
		}, 20); // Часовий інтервал між додаванням кожної літери

		return () => clearInterval(interval);
	}, [index, text]);

	return (
		<div className={classNames(cls.loader, {}, [className, cls[theme]])}>
			{displayText}
		</div>
	)
}