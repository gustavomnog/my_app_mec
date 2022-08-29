import { Container, Tabela, Titulo } from "./styles"

const CardSistema = ({ valorSistemaMec, acessos }) => {



  return (
    <Container>
      <Titulo>VALORES MECAUTO:</Titulo>
      <Tabela>
        <table>
          <tbody>
            <tr className="title">
              <th>&nbsp;</th>
              <th>À vista</th>
              <th>Em 2x:</th>
              <th>Em 3x:</th>
            </tr>
            <tr className="anu">
              <th>ANUAL:
                <span>Desconto de %</span>
              </th>
              <td>valor</td>
              <td>valor</td>
              <td>valor</td>
            </tr>
            <tr className="sem">
              <th>SEMESTRAL:
                <span>Desconto de %</span>
              </th>
              <td>valor</td>
              <td>valor</td>
              <td>-</td>
            </tr>
            <tr className="tri">
              <th>TRIMESTRAL:
                <span>Desconto de %</span>
              </th>
              <td>valor</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr className="men">
              <th>MENSAL:</th>
              <td>valor</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </Tabela>

    </Container>
  )
}


export default CardSistema