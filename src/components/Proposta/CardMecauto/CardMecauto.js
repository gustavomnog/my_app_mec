import { Container, Tabela, Titulo } from "./styles"

const CardMecauto = ({valorSistemaMec, acessos}) => {
  const {ANU, ANU2, ANU3, SEM, SEM2, TRI, MEN} = valorSistemaMec
  
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
              <th colSpan="4">Acessos simultâneos:{acessos + 5} *</th>
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
              <td>{ANU.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).replace('R$', '')}</td>
              <td>{ANU2.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).replace('R$', '')}</td>
              <td>{ANU3.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).replace('R$', '')}</td>
            </tr>
            <tr className="sem">
              <th>SEMESTRAL:
                <span>Desconto de 28%</span>
              </th>
              <td>{SEM.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).replace('R$', '')}</td>
              <td>{SEM2.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).replace('R$', '')}</td>
              <td>-</td>
            </tr>
            <tr className="tri">
              <th>TRIMESTRAL:
                <span>Desconto de 28%</span>
              </th>
              <td>{TRI.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).replace('R$', '')}</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr className="men">
              <th>MENSAL:</th>
              <td>{MEN.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).replace('R$', '')}</td>
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