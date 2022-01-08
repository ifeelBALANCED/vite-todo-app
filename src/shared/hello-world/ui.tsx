import { Spinner } from "@chakra-ui/react";
import { useState } from "react";

import { useGetAllTodosQuery } from "@/app/services/todosApi";
import ErrorMessage from "@/shared/error-message/ui";
import styles from "@/shared/hello-world/hello-world.module.css";

interface HelloWorldProps {
  msg: string;
}

export default function HelloWorld(props: HelloWorldProps) {
  const [count, setCount] = useState(0);
  const { data, error, isLoading } = useGetAllTodosQuery();
  const increment = () => setCount(prevCount => prevCount + 1);
  if (isLoading) {
    return <Spinner size="lg" />;
  }
  if (error) {
    return <ErrorMessage />;
  }
  return (
    <div className={styles.HelloWorld}>
      <h1 data-testid="title">{props.msg}</h1>
      {JSON.stringify(data, null, 2)}
      <p>
        Recommended IDE setup:{" "}
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noreferrer"
        >
          VSCode
        </a>
      </p>

      <p>
        See <code>README.md</code> for more information.
      </p>

      <p>
        <a
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noreferrer"
        >
          Vite Docs
        </a>{" "}
        |{" "}
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          React Docs
        </a>
      </p>

      <button type="button" onClick={increment}>
        count is: {count}
      </button>
      <p>
        Edit
        <code>components/HelloWorld/HelloWorld.tsx</code> to test hot module
        replacement.
      </p>
    </div>
  );
}
