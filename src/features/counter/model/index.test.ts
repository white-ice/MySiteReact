import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter, getCounterValue } from './selectors';
import { CounterSchema } from './schema';
import { counterActions, counterReducer } from './slice';

describe('getCounter.test', () => {
  test('should return counter value', () => {
    const state: StateSchema = {
      counter: { value: 10 },
    };
    expect(getCounter(state));
  });
});

describe('getCounterValue.test', () => {
  test('should return counter value', () => {
    const state: StateSchema = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state));
  });
});

describe('counterSlice.test', () => {
  test('decrement', () => {
    const state: CounterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 9,
    });
  });
});

describe('counterSlice.test', () => {
  test('increment', () => {
    const state: CounterSchema = { value: 9 };
    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 10,
    });
  });
});
