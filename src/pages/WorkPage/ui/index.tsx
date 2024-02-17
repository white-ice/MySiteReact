import { classNames } from 'shared/lib/classNames/classNames'
import cls from './style.module.scss'
import { Loader, LoaderTheme, PageContent, TypingText } from 'shared';
import { useTranslation } from 'react-i18next';

export interface WorkPageProps {
	className?: string;
}
export const WorkPage = ({ className }: WorkPageProps) => {
	const { t } = useTranslation()

	return (
		<div className={classNames(cls.work, {}, [className])}>
			<Loader text={t('Load main page title')} theme={LoaderTheme.TEXT} />
			<PageContent>
				<h1 className={classNames(cls.page__title)}>
					<TypingText
						text={'Work'}
						delay={2000} />
				</h1>
				<p>
					<TypingText
						text={'Text work page work page work page work page work page work page work page work page work page work page work page work page work page work page work page work page'}
						delay={4000} />
				</p>
			</PageContent>
		</div>
	)
}
