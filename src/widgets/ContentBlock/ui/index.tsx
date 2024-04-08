import cls from "./style.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { fetchData } from "shared/api";
import { Loader, LoaderTheme, PageContent, TypingText } from "shared";
import {
  // isLoaderDataPage,
  DataPageActions,
  getContentDataPage,
  // isVisibleContent,
} from "../index";
import { ContentScrollable, ThemeScroll } from "shared";
import { Projects } from "features/projects";
import { getProjects } from "features/projects/model/selectors";
import { LoadingActions, isLoader } from "entities/IsLoading";

export interface ContentBlockProps {
  className?: string;
  urlPage: string;
}

export const ContentBlock = (props: ContentBlockProps) => {
  const { t } = useTranslation();
  const { className, urlPage } = props;
  // const isLoader = useSelector(isLoaderDataPage);
  const isLoading = useSelector(isLoader);
  const data = useSelector(getContentDataPage);
  const projects = useSelector(getProjects);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const responseData = await fetchData({ key: urlPage });
      if (!isLoading) dispatch(LoadingActions.onLoading());

      dispatch(DataPageActions.setContent(responseData));
      setTimeout(() => {
        dispatch(LoadingActions.onLoading());
        // dispatch(DataPageActions.onLoading());
        dispatch(DataPageActions.onVisible());
      }, 1000);
    } catch (error) {
      setError(error.message);
      dispatch(LoadingActions.onLoading());
      // dispatch(DataPageActions.onLoading());
    }
  };

  if (isLoading) {
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
        <p className={classNames(cls["content-block__p"])}>
          <TypingText text={data.text} delay={2000} />
        </p>
        {urlPage === "work" && (
          <ContentScrollable theme={ThemeScroll.HORIZONTAL}>
            <Projects delay={3000} elementsLength={projects?.items?.length} />
          </ContentScrollable>
        )}
      </PageContent>
    </div>
  );
};
