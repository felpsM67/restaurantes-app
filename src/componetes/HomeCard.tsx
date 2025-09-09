import CardNovoPrato from "./CardNovoPrato";
import CardPrato from "./CardPrato";
import Prato from "../interface/Prato";
import "../estilos/Home.css";
import Usuario from "../interface/Usuario";

interface HomeCardProps {
  prato: Prato;
  usuario?: Usuario|null;
}

export default function HomeCard(props: HomeCardProps) {
  return (
    <div className="lista-pratos">
        <CardNovoPrato />
        {
            props.usuario ?

            (<><CardPrato
              usuario={props?.usuario}
              nome={props.prato.nome}
              cozinha={props.prato.cozinha}
              descricaoCurta={props.prato.descricaoCurta}
              imagem={props.prato.imagem}
            />
            <CardPrato
              usuario={props?.usuario}
              nome={props.prato.nome}
              cozinha={props.prato.cozinha}
              descricaoCurta={props.prato.descricaoCurta}
              imagem={props.prato.imagem}
            />
            <CardPrato
              usuario={props?.usuario}
              nome={props.prato.nome}
              cozinha={props.prato.cozinha}
              descricaoCurta={props.prato.descricaoCurta}
              imagem={props.prato.imagem}
            />
            <CardPrato
              usuario={props?.usuario}
              nome={props.prato.nome}
              cozinha={props.prato.cozinha}
              descricaoCurta={props.prato.descricaoCurta}
              imagem={props.prato.imagem}
            />
            <CardPrato
              usuario={props?.usuario}
              nome={props.prato.nome}
              cozinha={props.prato.cozinha}
              descricaoCurta={props.prato.descricaoCurta}
              imagem={props.prato.imagem}
            /></>)
            :
            null
        }
      </div>
  );
}