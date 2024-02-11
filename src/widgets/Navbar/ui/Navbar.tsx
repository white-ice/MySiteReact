// import { Theme, useTheme } from "app/providers/ThemeProvider"
import { classNames } from "shared/lib/classNames/classNames"
import cls from './Navbar.module.scss'
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import LocalSwitcher from "widgets/LangSwitcher/ui/LangSwitcher";
import { useTranslation } from "react-i18next";
import { ThemeButton, Button } from 'shared';
import { useCallback, useState } from "react";
import { AuthServerForm } from "features/auth";

interface NavbarProps {
	className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation('about')
	const [isAuthModal, setIsAuthModal] = useState(false)


	const onToggleModal = useCallback(() => {
		setIsAuthModal((prev) => !prev)
	}, [])

	return (
		<nav data-testid="navbar " className={classNames(cls.navbar, {}, [className])}>
			<div className="app-logo">
				<span>{t('Logo')}</span>
			</div>
			<div className={classNames(cls.navbar__buttons, {}, [className])}>
				<Button
					theme={ThemeButton.DEFAULT}
					onClick={onToggleModal}
				>
					{t('Login')}
				</Button>
				<AuthServerForm
					isOpen={isAuthModal}
					onClose={onToggleModal} />
      	<ThemeSwitcher />	
				<LocalSwitcher />
			</div>
		</nav>
	)

}

export default Navbar
