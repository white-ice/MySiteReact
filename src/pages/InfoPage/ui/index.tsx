import { classNames } from "shared/lib/classNames/classNames";
import cls from "./style.module.scss";
import { ContentBlock } from "widgets/ContentBlock";

interface InfoPageProps {
  className?: string;
}
const InfoPage = ({ className }: InfoPageProps) => {
  return (
    <div className={classNames(cls.info, {}, [className])}>
      <ContentBlock urlPage="info" />
    </div>
  );
};
export default InfoPage;
