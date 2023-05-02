import Megasena from "../components/Megasena";
import { useContexto } from "../hooks";
import Navbar from "../components/Navbar";

function Mega() {
    const { megasena  } = useContexto();
    return (
        <>
            {megasena.numeroDoConcurso ?
                <>
                <div><Navbar /></div>
                <div> <Megasena /> </div>
                </>
                :
                <div id="loading"> Carregando... </div>
            }
        </>
    )
}

export default Mega;