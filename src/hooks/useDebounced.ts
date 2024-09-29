import { useEffect, useState } from 'react';

function useDebounced<T>(value: T, delayMs: number) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handle = setTimeout(() => {
      setDebounced(value);
    }, delayMs);

    return () => clearTimeout(handle);
  }, [value, delayMs]);

  return debounced;
}

export default useDebounced;
