import Image from "next/image";

import styles from "./styles.module.scss";

export default function BackgroundImage() {
  return (
    <div className={styles.ContainerImage}>
      <div className={styles.Image1}>
        <Image
          src="/images/background.jpeg"
          alt="background"
          width={700}
          height={1200}
        />
      </div>
      <div className={styles.Image2}>
        <Image
          src="/images/fundo_tela.jpeg"
          alt="background"
          width={700}
          height={1200}
        />
      </div>
    </div>
  );
}
