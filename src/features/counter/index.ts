import Counter from './ui';
import { counterActions, counterReducer } from './model/slice';
import type { CounterSchema } from './model/schema';
import { getCounter, getCounterValue } from './model/selectors';

export {
  Counter,
  counterReducer,
  CounterSchema,
  getCounter,
  getCounterValue,
  counterActions,
};
