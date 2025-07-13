import { useRef,useEffect } from "react";
/**
 * Custom hook to keep track of the previous value of a variable.
 * @param value The current value to track.
 * @returns The previous value of the variable.
 */
const usePrevious = (value: any) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};
export default usePrevious;