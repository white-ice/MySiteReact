import cls from "./style.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { fetchData } from "shared/api";
import { Loader, LoaderTheme, PageContent, TypingText } from "shared";
import {
  isLoaderDataPage,
  DataPageActions,
  getContentDataPage,
} from "../index";

export interface ContentBlockProps {
  className?: string;
  urlPage: string;
}

export const ContentBlock = (props: ContentBlockProps) => {
  const { t } = useTranslation();
  const { className, urlPage } = props;
  const isLoader = useSelector(isLoaderDataPage);
  const data = useSelector(getContentDataPage);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const responseData = await fetchData({ key: urlPage });
      dispatch(DataPageActions.setContent(responseData));
      setTimeout(() => {
        dispatch(DataPageActions.onLoading());
      }, 1000);
    } catch (error) {
      setError(error.message);
      dispatch(DataPageActions.onLoading());
    }
  };

  if (isLoader) {
    return (
      <div className={classNames(cls["content-block"], {}, [className])}>
        <Loader text={t("Load main page title")} theme={LoaderTheme.TEXT} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={classNames(cls["content-block"], {}, [className])}>
      <PageContent>
        <h1 className={classNames(cls["content-block__title"])}>
          <TypingText text={data.title} delay={1000} />
        </h1>
        <p>
          <TypingText text={data.text} delay={2000} />
        </p>
      </PageContent>
    </div>
  );
};
