import { FC, HTMLAttributes } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./style.module.scss";
import { useSelector } from "react-redux";
import { isVisibleContent } from "widgets/ContentBlock";

export interface PageContentProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const PageContent: FC<PageContentProps> = (props) => {
  const { children, className } = props;
  const isVisible = useSelector(isVisibleContent);

  console.log({ isVisible });
  return (
    <div
      className={classNames(
        cls.page__wrap,
        { show: isVisible, hidden: !isVisible },
        [className],
      )}
    >
      {children}
    </div>
  );
};
