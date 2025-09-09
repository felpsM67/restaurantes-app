import "../estilos/HomeAdmin.css";

export default function HomeAdmin() {
  return (
    <div className="container-table">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cozinha</th>
            <th>Descrição Curta</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Feijoada</td>
            <td>Brasileira</td>
            <td>Feijoada completa com arroz, farofa e couve.</td>
            <td>
              <button>Editar</button>
              <button>Deletar</button>
              <button>Ver Detalhes</button>
            </td>
          </tr>
          <tr>
            <td>Sushi</td>
            <td>Japonesa</td>
            <td>Sushi variado com peixe fresco e arroz temperado.</td>
            <td>
              <button>Editar</button>
              <button>Deletar</button>
              <button>Ver Detalhes</button>
            </td>
          </tr>
          <tr>
            <td>Tacos</td>
            <td>Mexicana</td>
            <td>Tacos recheados com carne, queijo e vegetais frescos.</td>
            <td>
              <button>Editar</button>
              <button>Deletar</button>
              <button>Ver Detalhes</button>
            </td>
          </tr>
          <tr>
            <td>Pizza Margherita</td>
            <td>Italiana</td>
            <td>Pizza clássica com molho de tomate, mussarela e manjericão.</td>
            <td>
              <button>Editar</button>
              <button>Deletar</button>
              <button>Ver Detalhes</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
