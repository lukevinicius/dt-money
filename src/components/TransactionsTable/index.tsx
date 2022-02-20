import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  const [transactions, setTransactions] = useState()

  useEffect(() => {
    api.get('http://localhost:3000/api/transactions')
    .then(data => setTransactions(data.data));
  }, [])

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>teste</td>
            <td className="deposit">R$1000</td>
            <td>Desenvolvimento</td>
            <td>30/01/2001</td>
          </tr>
          <tr>
            <td>teste</td>
            <td className="withdraw">-R$500</td>
            <td>Desenvolvimento</td>
            <td>30/01/2001</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}