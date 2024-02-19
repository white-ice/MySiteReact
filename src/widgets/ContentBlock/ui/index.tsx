import { classNames } from "shared/lib/classNames/classNames";
import cls from "./style.module.scss";
import { fetchData } from "shared/api";
import { useEffect, useState } from "react";
import { Loader, LoaderTheme, PageContent, TypingText } from "shared";
import { useTranslation } from "react-i18next";

type DataPage = {
  title: string;
  text: string;
};

interface ContentBlockProps {
  className?: string;
  urlPage: string;
}

export const ContentBlock = (props: ContentBlockProps) => {
  const { t } = useTranslation();
  const { className, urlPage } = props;
  const [data, setData] = useState<DataPage>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const responseData = await fetchData({ page: urlPage });
      setData(responseData);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  if (loading) {
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
