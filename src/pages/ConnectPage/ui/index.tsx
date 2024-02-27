import { classNames } from "shared/lib/classNames/classNames";
import cls from "./style.module.scss";
import { ContentBlock } from "widgets/ContentBlock";

export interface ConnectPageProps {
  className?: string;
}
export const ConnectPage = ({ className }: ConnectPageProps) => {
  return (
    <div className={classNames(cls.connect, {}, [className])}>
      <ContentBlock urlPage="connect" />
    </div>
  );
};
