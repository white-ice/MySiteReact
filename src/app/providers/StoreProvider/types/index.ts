import { IsLoadingSchema } from "entities/IsLoading";
import { UserSchema } from "entities/User";
import { CounterSchema } from "features/counter";
import { ProjectsSchema } from "features/projects/";
import { DataPageSchema } from "widgets/ContentBlock";
import { NavbarSchema } from "widgets/Navbar";

export interface StateSchema {
  counter?: CounterSchema;
  user?: UserSchema;
  content?: DataPageSchema;
  navbar?: NavbarSchema;
  projects?: ProjectsSchema;
  loading?: IsLoadingSchema;
}
