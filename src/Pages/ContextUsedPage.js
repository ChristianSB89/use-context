import { useContext } from "react";
import { CounterContext } from "../contextState/counterContext";

const ContextUsedPage = () => {
  const { count } = useContext(CounterContext);
  return (
    <section>
      <h2>Context Used</h2>
      <h2>{count}</h2>
    </section>
  );
};

export default ContextUsedPage;
