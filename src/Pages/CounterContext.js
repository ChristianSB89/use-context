import { CounterContext } from "../contextState/counterContext";
import { useContext } from "react";

const CounterContextPage = () => {
  const { count, setCount } = useContext(CounterContext);

  // decreases the count
  const decrease = () => {
    setCount((count) => count - 1);
  };
  // increases the count
  const increase = () => {
    setCount((count) => count + 1);
  };
  return (
    <>
      <h2>{count}</h2>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </>
  );
};

export default CounterContextPage;
