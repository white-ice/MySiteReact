import { classNames } from "shared/lib/classNames/classNames";
import cls from "./style.module.scss";
import { useTranslation } from "react-i18next";
import { AppLink, AppLinkTheme, Logo, LogoVariant } from "shared";
import { MouseEvent, useEffect, useState } from "react";
import { fetchData } from "shared/api";
import { NavbarActions } from "../model/slice";
import { useDispatch, useSelector } from "react-redux";
import { getNavbarItems } from "../model/selectors";
import {
  DataPageActions,
  isLoaderDataPage,
  isVisibleContent,
} from "widgets/ContentBlock";
import { useNavigate, useLocation } from "react-router-dom";

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { t } = useTranslation();
  const { className } = props;
  const dispatch = useDispatch();
  const { items } = useSelector(getNavbarItems);
  const isVisible = useSelector(isVisibleContent);
  const isLoader = useSelector(isLoaderDataPage);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const responseData = await fetchData({ key: "routers" });
      dispatch(NavbarActions.setNavbar({ items: responseData }));
    } catch (error) {
      setError(error.message);
      dispatch(DataPageActions.onLoading());
    }
  };

  const handleLink = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = e.target as HTMLAnchorElement;
    const href = target.getAttribute("href");

    switch (href) {
      case "/":
        if (isLoader) dispatch(DataPageActions.onLoading());
        if (isVisible) dispatch(DataPageActions.onVisible());
        setTimeout(() => {
          navigate(href);
        }, 1000);
        break;
      default:
        if (location.pathname != href && location.pathname != "/") {
          dispatch(DataPageActions.onVisible());
          setTimeout(() => {
            dispatch(DataPageActions.onLoading());
            navigate(href);
          }, 1000);
        } else {
          if (!isLoader) dispatch(DataPageActions.onLoading());
          navigate(href);
        }
    }
  };
  // Error
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <nav
      data-testid="navbar "
      className={classNames(cls.navbar, {}, [className])}
    >
      <div className="app-logo">
        <Logo onLinkClick={handleLink} theme={LogoVariant.TEXT}>
          {t("My/static/work")}
        </Logo>
      </div>
      <div className={classNames(cls.navbar__links)}>
        {items?.length
          ? items.map((link, i) => (
              <AppLink
                key={i}
                to={link.url}
                theme={AppLinkTheme.LIGHT}
                className="text-decoration__inherit"
                classNameBlock="navbar__link"
                onLinkClick={handleLink}
              >
                {link.name}
              </AppLink>
            ))
          : null}
      </div>
    </nav>
  );
};
