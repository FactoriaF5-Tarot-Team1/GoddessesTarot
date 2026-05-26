import Button from "../../components/button/Button";
import Bin from "../../assets/icons/bin.svg";

function History() {
  return (
    <section>
      <p>Sabiduría en datos</p>
      <h2>Historial de lecturas</h2>

      <Button variant={"delete"}>
        <img src={Bin} alt="Icono de una papelera de basura" />
        Eliminar todas las lecturas
      </Button>
    </section>
  );
}

export default History;
