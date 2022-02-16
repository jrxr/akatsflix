import Image from "next/image";
import styles from "./styles.module.scss";

import { ActiveLink } from "../ActiveLink";
import Search from "../Search";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/images/Logo.svg" alt="akatsflix" width={70} height={70} />
        <p>
          AKATS<span>FLIX</span>
        </p>
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>INICIO</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/animes">
            <a>ANIMES</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/filmes">
            <a>FILMES</a>
          </ActiveLink>
        </nav>

        <Search />
      </div>
    </header>
  );
}
