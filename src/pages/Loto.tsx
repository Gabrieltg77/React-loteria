import Lotofacil from "../components/Lotofacil";
import { useContexto } from "../hooks";
import Navbar from "../components/Navbar";

function Loto() {
    const { lotofacil } = useContexto();
    return (
        <>
            {lotofacil.numeroDoConcurso ?
                <>
                <div><Navbar /></div>
                <div><Lotofacil /></div>
                </>
                :
                <div id="loading"> Carregando... </div>
            }
        </>
    )
}

export default Loto;