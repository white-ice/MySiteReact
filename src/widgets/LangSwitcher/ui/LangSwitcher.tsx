import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import { ThemeButton, Button } from 'shared';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
	readonly className?: string;
}
const LangSwitcher = ({ className }: LangSwitcherProps) => {
	const { i18n } = useTranslation()
	const toggleLocation = async () => {
		i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua')
	}

	return (
		<div className={classNames(cls.lang__switcher, {}, [className])}>
			<Button
				theme={ThemeButton.DEFAULT}
				onClick={toggleLocation}>
				{i18n.language === 'ua'
					? 'en'
					: 'ua'}
			</Button>
		</div>
	)
}
export default LangSwitcher 