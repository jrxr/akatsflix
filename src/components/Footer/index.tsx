import styles from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <p>AKATSFLIX &copy; 2022</p>
      </div>
    </footer>
  );
}
