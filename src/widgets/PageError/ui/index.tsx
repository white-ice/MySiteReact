import { classNames } from 'shared/lib/classNames/classNames'
import cls from './style.module.scss'
import { useTranslation } from 'react-i18next';
import { Button } from 'shared';

interface PageErrorProps {
	className?: string;
}
const PageError = ({ className }: PageErrorProps) => {
	const { t } = useTranslation();

	const onReloadPage = () => {
		location.reload();
	}

	return (
		<div className={classNames(cls['page-error'], {}, [className])}>
			<p>{t('page-error')}</p>
			<Button
				onClick={onReloadPage}>
				{t('refresh-page')}
			</Button>
		</div>
	)
}
export default PageError