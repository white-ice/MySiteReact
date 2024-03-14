import { classNames } from "shared/lib/classNames/classNames";
import { useEffect, useState } from "react";
import { fetchData } from "shared/api";
import { useDispatch, useSelector } from "react-redux";
import { ProjectsActions } from "../model/slice";
import { getProjectsData } from "../model/selectors";
import cls from "./style.module.scss";
import { Card, Loader, LoaderTheme } from "shared";
import { LoadingActions, isLoader } from "entities/IsLoading";

interface ProjectProps {
  className?: string;
}

export const Projects = (props: ProjectProps) => {
  const { className } = props;
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const data = useSelector(getProjectsData);
  const isLoading = useSelector(isLoader);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const responseData = await fetchData({ key: "projects" });
      console.log(responseData);
      if (!isLoading) dispatch(LoadingActions.onLoading());
      dispatch(ProjectsActions.setProjectsData({ items: responseData }));
      setTimeout(() => {
        dispatch(LoadingActions.onLoading());
      }, 1000);
    } catch (error) {
      setError(error.message);
      dispatch(LoadingActions.onLoading());
    }
  };

  if (isLoading) {
    return (
      <div className={classNames(cls.projects__loader)}>
        <Loader theme={LoaderTheme.ICON} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={classNames(cls.projects, {}, [className])}>
      {data?.items.map((item) => <Card key={item.id} item={item} />)}
    </div>
  );
};
