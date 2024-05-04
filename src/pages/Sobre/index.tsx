import styles from "./Sobre.module.scss";
import stylesTema from "styles/Tema.module.scss";
// import casa from "assets/sobre/casa.png";
import photo1 from "assets/sobre/photo1.jpg";
import photo2 from "assets/sobre/photo2.jpg";
import photo3 from "assets/sobre/photo3.jpg";
import photo4 from "assets/sobre/photo4.jpg";
import photo5 from "assets/sobre/photo5.jpg";

const imagens = [photo1, photo2, photo3, photo4, photo5];

export default function Sobre() {
  return (
    <section>
      <h3 className={stylesTema.titulo}>Sobre</h3>
      <div className={styles.sobreNos}>
        {/* <img src={casa} alt="Casa Aluroni" /> */}
        <div className={styles.sobreNos__texto}>
          <p>
            A AMAC é a Associção de Mulheres Agricultoras da comunidade rural de
            Caboré, município de Lucrécia/RN.
          </p>
          <p>
            Quinzenalmente é realizada a Feirinha da AMAC, no Centro de Produção
            e Comercialização, onde são ofertadas comidas típicas nordestinas,
            como bolos tradicionais, comidas de milho, doces regionais, entre
            outras.
          </p>
          <p>Faça-nos uma visita e apaixone-se!</p>
        </div>
      </div>
      <div className={styles.imagens}>
        {imagens.map((imagem, index) => (
          <div key={index} className={styles.imagens__imagem}>
            <img src={imagem} alt="imagem de massa" />
          </div>
        ))}
      </div>
    </section>
  );
}
