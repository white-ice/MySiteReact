import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { AppLinkTheme, AppLink } from "shared/ui/AppLink";
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig';


interface SidebarProps {
	className?: string;
}
const Sidebar = ({ className }: SidebarProps) => {
	const { t } = useTranslation('about')

	return (
		<div data-testid="sidebar" className={classNames(cls.sidebar, {}, [className])}>
			<div className={classNames(cls.sidebar__items, {}, [])}>
				<AppLink
					className={classNames(cls.sidebar__link, {}, [])}
					classNameBlock={classNames(cls.sidebar__item, {}, [])}
					theme={AppLinkTheme.PRIMARY}
					to={RoutePath.main}>
					{t('Main page')}
				</AppLink>
				<AppLink
					className={classNames(cls.sidebar__link, {}, [])}
					classNameBlock={classNames(cls.sidebar__item, {}, [])}
					theme={AppLinkTheme.PRIMARY}
					to={RoutePath.about}>
					{t('About page')}
				</AppLink>
			</div>
		</div>
	)
}
export default Sidebar