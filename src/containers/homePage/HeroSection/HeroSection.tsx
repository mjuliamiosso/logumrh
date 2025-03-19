import { FC } from "react";
import styles from "./HeroSection.module.scss";
import clsx from "clsx";
import Button from "@/components/common/Button/Button";
import Image from "next/image";

const HeroSection: FC = () => (
  <section className={clsx(styles.heroContainer, "container section")}>
    <div className={styles.textContainer}>
      <h1>Processos seletivos humanizados e eficientes</h1>
      <h3>
        A melhor solução para o Recrutamento e Seleção no Litoral Norte e Vale
        do Paraíba! Economize tempo e dinheiro e encontre o candidato ideal com
        nossa equipe especializada.
      </h3>
      <div className={styles.buttonContainer}>
        <Button variant="contained">Quero Contratar</Button>
        <Button>Ver Vagas</Button>
      </div>
    </div>
    <div className={styles.heroImage}>
      <Image
        src="/assets/hero-img.svg"
        alt="Processo de recrutamento"
        style={{
          width: "100%",
          height: "auto",
        }}
        width={500}
        height={400}
        priority
      />
    </div>
  </section>
);

export default HeroSection;
