import { UserSchema } from 'entities/User';
import { CounterSchema } from 'features/counter';

export interface StateSchema {
  counter?: CounterSchema;
  user?: UserSchema;
}
