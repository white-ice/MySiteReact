// import { Theme, useTheme } from "app/providers/ThemeProvider"
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
// import { ThemeSwitcher } from "widgets/ThemeSwitcher";
// import LocalSwitcher from "widgets/LangSwitcher/ui/LangSwitcher";
import { useTranslation } from "react-i18next";
// import { ThemeButton, Button } from 'shared';
// import { useCallback, useEffect, useState } from "react";
// import { AuthServerForm } from "features/auth";

import { RoutePath } from "shared/config/routeConfig";
import { AppLink, AppLinkTheme, Logo, LogoVariant } from "shared";

const navbarLinks = [
  {
    url: RoutePath.work,
    name: "Work",
  },
  {
    url: RoutePath.info,
    name: "Info",
  },
  {
    url: RoutePath.connect,
    name: "Connect",
  },
];

interface NavLink {
  url: string;
  name: string;
}

interface NavbarProps {
  className?: string;
  links?: NavLink[];
}

const Navbar = (props: NavbarProps) => {
  const { t } = useTranslation();
  const { className, links = navbarLinks } = props;
  // const [isAuthModal, setIsAuthModal] = useState(false)
  // const onToggleModal = useCallback(() => {
  // 	setIsAuthModal((prev) => !prev)
  // }, [])

  return (
    <nav
      data-testid="navbar "
      className={classNames(cls.navbar, {}, [className])}
    >
      <div className="app-logo">
        <Logo theme={LogoVariant.TEXT}>{t("My/static/work")}</Logo>
      </div>
      <div className={classNames(cls.navbar__links)}>
        {links.length
          ? links.map((link, i) => (
              <AppLink
                key={i}
                to={link.url}
                theme={AppLinkTheme.LIGHT}
                className="text-decoration__inherit"
                classNameBlock="navbar__link"
              >
                {link.name}
              </AppLink>
            ))
          : null}
      </div>
      {/* <div className={classNames(cls.navbar__buttons, {}, [className])}>
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
			</div> */}
    </nav>
  );
};

export default Navbar;
