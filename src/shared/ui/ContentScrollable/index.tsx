import { ReactNode } from "react";
import cls from "./style.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ThemeScroll {
  VERTICAL = "content-scrollable__v",
  HORIZONTAL = "content-scrollable__h",
}

interface ContentScrollableProps {
  className?: string;
  children: ReactNode;
  theme?: ThemeScroll;
}

export const ContentScrollable = (props: ContentScrollableProps) => {
  const { className, children, theme } = props;

  return (
    <div
      className={classNames(cls["content-scrollable"], {}, [
        className,
        cls[theme],
      ])}
    >
      {children}
    </div>
  );
};
