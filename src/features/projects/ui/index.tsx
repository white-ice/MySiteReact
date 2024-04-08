import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback, useEffect, useState } from "react";
import { fetchData } from "shared/api";
import { useDispatch, useSelector } from "react-redux";
import { ProjectsActions } from "../model/slice";
import { getProjectsData, isLoaderProjects } from "../model/selectors";
import cls from "./style.module.scss";
import { Card, Loader, LoaderTheme, Modal } from "shared";
import { ProjectData } from "../model/type";
// import { ProjectsActions, isLoader } from "entities/IsLoading";

interface ProjectProps {
  className?: string;
  elementsLength?: number;
  delay?: number;
}

export const Projects = memo((props: ProjectProps) => {
  const { className, elementsLength, delay } = props;
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const data = useSelector(getProjectsData);
  const isLoading = useSelector(isLoaderProjects);
  const widthBlock = elementsLength * 550;
  const [onDelay, setOnDelay] = useState(false);
  const [modalItem, setModalItem] = useState<ProjectData>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  setTimeout(() => {
    setOnDelay(true);
  }, delay);

  useEffect(() => {
    if (onDelay && !data.items.length) {
      getData();
    }
  }, [onDelay]);

  const getData = async () => {
    try {
      const responseData = await fetchData({ key: "projects" });
      console.log(responseData);
      if (!isLoading) dispatch(ProjectsActions.onLoading());
      dispatch(ProjectsActions.setProjectsData(responseData));
      setTimeout(() => {
        dispatch(ProjectsActions.onLoading());
      }, 1000);
    } catch (error) {
      setError(error.message);
      dispatch(ProjectsActions.onLoading());
    }
  };

  const showDetailProject = useCallback(
    (item: ProjectData) => {
      setModalItem(item);
      setModalVisible(true);
    },
    [modalItem],
  );

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
    <div
      style={{ width: widthBlock + "px" }}
      className={classNames(cls.projects, {}, [className])}
    >
      {data?.items.map((item) => (
        <Card
          onClick={() => showDetailProject(item)}
          key={item.id}
          item={item}
        />
      ))}
      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
        <h3>{modalItem?.title}</h3>
        <p>{modalItem?.text}</p>
      </Modal>
    </div>
  );
});
