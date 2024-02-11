import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './style.module.scss'

interface NotFoundProps {
	className?: string;
}

const NotFoundPage = ({ className }: NotFoundProps) => {
	const { t } = useTranslation()

	return (
		<div className={classNames(cls['content__container'], {}, [className])}>
			<h1>{t('Сторінка не знайдена')}</h1>
		</div>
	)
}
export default NotFoundPage