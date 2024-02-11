import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import { useTheme, Theme } from 'app/providers/ThemeProvider';
import SunDark from 'shared/assets/icons/sun.svg';
import SunLight from 'shared/assets/icons/sun-light.svg';
import { Button, ThemeButton } from 'shared';

interface ThemeSwitcherProps {
	className?: string;
}
const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme()
	return (
		<div className={classNames(cls.switcher, {}, [className])}>
			<Button
				theme={ThemeButton.DEFAULT}
				onClick={toggleTheme}>
				{theme === Theme.DARK
					? <SunLight />
					: <SunDark />}
			</Button>
		</div>
	)
}
export default ThemeSwitcher