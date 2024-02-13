import { classNames } from 'shared/lib/classNames/classNames'
import cls from './style.module.scss'
import { FC, ReactNode } from 'react';
import { AppLink, AppLinkTheme } from '../AppLink';

export enum LogoVariant {
	TEXT = 'logo__text',
	ICON = 'logo__icon',
}

interface LogoProps {
	children?: ReactNode;
	className?: string;
	theme?: LogoVariant
}

export const Logo: FC<LogoProps> = (props) => {
	const { className, theme, children } = props;
	return (
		<div className={classNames(cls.logo, {}, [className, cls[theme]])}>
			<AppLink to={'/'} theme={AppLinkTheme.LIGHT}>
				{children}
			</AppLink>
		</div>
	)
}