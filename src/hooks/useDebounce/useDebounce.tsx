import { useRef } from 'react';

export function useDebounce<A extends unknown[]>(
  fn: (...args: A) => void,
  delay: number,
): (...args: A) => void {
  const timeoutRef = useRef<number | undefined>(undefined);

  const debouncedFn = (...args: A) => {
    window.clearTimeout(timeoutRef.current);

    timeoutRef.current = window.setTimeout(() => {
      fn(...args);
    }, delay);
  };

  return debouncedFn;
}
