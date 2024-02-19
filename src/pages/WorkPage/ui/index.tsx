import { classNames } from 'shared/lib/classNames/classNames'
import cls from './style.module.scss'
import { ContentBlock } from 'widgets/ContentBlock';

export interface WorkPageProps {
	className?: string;
}
export const WorkPage = ({ className }: WorkPageProps) => {
	return (
		<div className={classNames(cls.work, {}, [className])}>
			<ContentBlock urlPage='work' />
		</div>
	)
}
