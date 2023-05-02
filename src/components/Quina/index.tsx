import { useContexto } from "../../hooks";

function Quina(){

    const {quina} = useContexto();
    return (    
        <div id = "homebody"> 
            <table id="tabela">
                <tr id="linha">
                    <td> <td className="primeiraColuna"><img alt='' src={process.env.PUBLIC_URL + '/assets/trevo-quina.png'} /></td><td><label id="tituloQuina">QUINA</label></td></td>
                    <td>
                    {quina.dezenas.map(numero => (
            <><td id="dezenasQuina"><label id="labelDezenas">{numero}</label></td>
            <td id="espacoDezenas"></td></>
          ))}
          </td>
                </tr>
                <tr>
                <td>
                    <td className="primeiraColuna"></td>
                    <td id="coluna">Estimativa do prêmio do próximo concurso. Sorteio em {quina.dataProximoConcurso}:</td>
                </td>
                    <td id="acumulado"><label>{quina.acumulado ? "ACUMULOU!": "Não Acumulado"}</label></td>
                </tr>
                <tr>
                    <td><td className="primeiraColuna"></td>
                        <td id="tituloQuina"> R$ {quina.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'decimal', maximumFractionDigits: 0 })},00</td>
                    </td>
                        <td>Concurso {quina.numeroDoConcurso} {quina.dataPorExtenso}</td>
                </tr>
           </table>
        </div>
    )
}

export default Quina;