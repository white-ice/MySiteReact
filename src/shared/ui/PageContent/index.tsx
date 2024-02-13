import { FC, HTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './style.module.scss'

export interface PageContentProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
}

export const PageContent: FC<PageContentProps> = (props) => {
	const { children, className } = props

	return (
		<div className={classNames(cls.page__wrap, {}, [className])}>
			{children}
		</div>
	)
}