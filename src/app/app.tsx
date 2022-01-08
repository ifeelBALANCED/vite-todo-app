import { FC, memo } from "react";

import styles from "@/app/styles/App.module.scss";
import Logo from "@/assets/logo.png";
import HelloWorld from "@/shared/hello-world/ui";

const App: FC = () => {
  return (
    <main className={styles.main}>
      <img className={styles.logo} alt="React logo" width="400px" src={Logo} />
      <HelloWorld msg="Hello React + TypeScript + Vite" />
    </main>
  );
};

export default memo(App);
