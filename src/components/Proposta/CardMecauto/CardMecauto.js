import { Container, Tabela, Titulo } from "./styles"

const CardMecauto = ({anu, anu2, anu3, sem, sem2, tri, men}) => {
  return (
    <Container>
      <Titulo>
        <span>MECAUTO</span>
        <span>Sistema com mais funções.</span>
      </Titulo>
      <Tabela>
        <table>
          <tbody>
            <tr className="acesso">
              <th colSpan="4">Acessos simultâneos:5 *</th>
            </tr>
            <tr className="title">
              <th>&nbsp;</th>
              <th>À vista</th>
              <th>Em 2x:</th>
              <th>Em 3x:</th>
            </tr>
            <tr className="anu">
              <th>ANUAL:
                <span>Desconto de 28%</span>
              </th>
              <td>{anu}</td>
              <td>{anu2}</td>
              <td>{anu3}</td>
            </tr>
            <tr className="sem">
              <th>SEMESTRAL:
                <span>Desconto de 28%</span>
              </th>
              <td>{sem}</td>
              <td>{sem2}</td>
              <td>-</td>
            </tr>
            <tr className="tri">
              <th>TRIMESTRAL:
                <span>Desconto de 28%</span>
              </th>
              <td>{tri}</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr className="men">
              <th>MENSAL:</th>
              <td>{men}</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </Tabela>

    </Container>
  )
}


export default CardMecauto