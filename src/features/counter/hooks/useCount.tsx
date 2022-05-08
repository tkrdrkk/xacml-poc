import { lazy, useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState<number>(0);
  const [multiplyCount, setMultiplyCount] = useState<number>(0);
  const increase = () => {
    setCount((prev) => prev + 1);
  };
  const decrease = () => {
    setCount((prev) => prev - 1);
  };

  const multiple = (times: number) => {
    setCount((prev) => prev * times);
    setMultiplyCount((prev) => prev + 1);
  };
  const reset = () => {
    setCount(0);
    setMultiplyCount(0);
  };

  return { count, multiplyCount, increase, decrease, multiple, reset };
};
