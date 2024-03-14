import { ProjectData } from "features/projects/";
import cls from "./style.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";

interface CardProps {
  className?: string;
  item: ProjectData;
}

export const Card = memo((props: CardProps) => {
  const { className, item } = props;
  return (
    <div className={classNames(cls.card, {}, [className])}>
      <div className={classNames(cls.card__img)}>
        <img src={item.img} />
      </div>
      <div className={classNames(cls.card__body)}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
});
