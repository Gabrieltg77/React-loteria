import Quina from "../components/Quina";
import { useContexto } from "../hooks";

import Navbar from "../components/Navbar";

function QuinA() {
    const { quina  } = useContexto();
    return (
        <>
            {quina.numeroDoConcurso ?
                <>
                <div><Navbar /></div>
                <div> <Quina /> </div>
                </>
                :
                <div id="loading"> Carregando... </div>
            }
        </>
    )
}

export default QuinA;