import { FC } from "react";
import styles from "./HeroSection.module.scss";
import clsx from "clsx";
import Button from "@/components/common/Button/Button";

const HeroSection: FC = () => (
  <section className={clsx(styles.heroContainer, "container section")}>
    <div className={styles.textContainer}>
      <h1>Processos seletivos humanizados e eficientes</h1>
      <h3>
        A melhor solução para seu Recrutamento e Seleção! Economize tempo e
        dinheiro e encontre o candidato ideal com nossa equipe especializada.
      </h3>
      <div className={styles.buttonContainer}>
        <Button variant="contained">Quero Contratar</Button>
        <Button>Ver Vagas</Button>
      </div>
    </div>
    <img src="/assets/hero-img.svg" alt="Processo de recrutamento" />
  </section>
);

export default HeroSection;
