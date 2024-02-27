import { classNames } from "shared/lib/classNames/classNames";
import cls from "./style.module.scss";
import { Link, LinkProps } from "react-router-dom";
import { FC, MouseEvent } from "react";

export enum AppLinkTheme {
  DEFAULT = "default",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  LIGHT = "light",
  DARK = "dark",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  classNameBlock?: string;
  theme?: AppLinkTheme;
  onLinkClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}
export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    classNameBlock,
    theme = AppLinkTheme.DEFAULT,
    onLinkClick,
    children,
    ...otherProps
  } = props;

  return (
    <div className={classNames(cls.appLink__container, {}, [classNameBlock])}>
      <Link
        to={to}
        className={classNames(cls.appLink, {}, [className, cls[theme]])}
        onClick={onLinkClick}
        {...otherProps}
      >
        {children}
      </Link>
    </div>
  );
};
