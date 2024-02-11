import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { CounterSchema } from './schema';

export const getCounter = (state: StateSchema) => state.counter;

export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterSchema) => counter.value,
);
