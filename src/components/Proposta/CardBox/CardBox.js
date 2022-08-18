import { Container, Tabela, Titulo } from "./styles"

const CardBox = () => {
  return (
    <Container>
      <Titulo>
        <span>MECAUTO-BOX</span>
        <span>Sistema com funções mais básicas.</span>
        <span><a href="#"><b>CLIQUE AQUI</b></a> para comprar as diferenças</span>
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
              <td>valor</td>
              <td>valor</td>
              <td>valor</td>
            </tr>
            <tr className="sem">
              <th>SEMESTRAL:
                <span>Desconto de 28%</span>
              </th>
              <td>valor</td>
              <td>valor</td>
              <td>-</td>
            </tr>
            <tr className="tri">
              <th>TRIMESTRAL:
                <span>Desconto de 28%</span>
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


export default CardBox