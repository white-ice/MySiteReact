export interface ProjectData {
  id: string;
  title: string;
  description: string;
  text: string;
  img: string;
}
export interface ProjectsSchema {
  items: ProjectData[];
  // isLoading: boolean;
  // error?: string;
}
