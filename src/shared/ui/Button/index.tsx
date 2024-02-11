import { classNames } from 'shared/lib/classNames/classNames'
import cls from './style.module.scss'
import { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButton {
	CIRCLE = 'btn__circle',
	DEFAULT = 'btn__default',
	PRIMARY = 'btn__primary',
	SECONDARY = 'btn__secondary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
}

const Button: FC<ButtonProps> = (props) => {
	const { className, children, theme, ...otherProps } = props;

	return (
		<button
			className={classNames(cls.btn, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</button>
	)
}
export { Button } 