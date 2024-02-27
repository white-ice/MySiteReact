import { UserSchema } from "entities/User";
import { CounterSchema } from "features/counter";
import { DataPageSchema } from "widgets/ContentBlock";
import { NavbarSchema } from "widgets/Navbar";

export interface StateSchema {
  counter?: CounterSchema;
  user?: UserSchema;
  content?: DataPageSchema;
  navbar?: NavbarSchema;
}
