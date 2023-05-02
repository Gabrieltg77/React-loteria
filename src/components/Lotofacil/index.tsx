import { useContexto } from "../../hooks";

function Lotofacil(){

    const {lotofacil} = useContexto();
    return (    
        <div id = "homebody"> 
            <table>
                <tr id="linha">
                    <td> <td className="primeiraColuna"><img src={process.env.PUBLIC_URL + '/assets/trevo-lotofacil.png'} /></td><td><label id="tituloLOTO">LOTOFÁCIL</label></td></td>
                    <td>
                    {[...Array(15)].map((_, index) => (
                    <>
                    {index % 5 === 0 && <tr key={index / 5} />}
                    <td
                        key={index}
                        id="dezenasLF"
                        style={{
                        borderBottom: index < 10 ? "1px solid #ddd" : undefined
                        }}
                    >
                        <label id="labelDezenasLF">{lotofacil.dezenas[index]}</label>
                    </td>
                    </>
                ))}
          </td>
                </tr>
                <tr>
                <td>
                    <td className="primeiraColuna"></td>
                    <td id="coluna">Estimativa do prêmio do próximo concurso. Sorteio em {lotofacil.dataProximoConcurso}:</td>
                </td>
                    <td id="acumulado"><label>{lotofacil.acumulado ? "ACUMULOU!": lotofacil.quantidadeGanhadores+" GANHADORES"}</label></td>
                </tr>
                <tr>
                    <td><td className="primeiraColuna"></td>
                        <td id="tituloLOTO"> R$ {lotofacil.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'decimal', maximumFractionDigits: 0 })},00</td>
                    </td>
                    
                        <td>Concurso {lotofacil.numeroDoConcurso} {lotofacil.dataPorExtenso}</td>
                </tr>
           </table>
        </div>
    )
}

export default Lotofacil;