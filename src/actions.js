export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT';

export function incrementCounter() {
  return {
    type: COUNTER_INCREMENT
  };
}
export function decrementCounter() {
  return {
    type: COUNTER_DECREMENT
  };
}
