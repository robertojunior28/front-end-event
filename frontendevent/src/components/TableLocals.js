import React from 'react';

class LocalTable extends React.Component {
  render() {
    const {localDtos} = this.props;

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Rua</th>
            <th>Número</th>
            <th>Cidade</th>
            <th>UF</th>
          </tr>
        </thead>
        <tbody>
          {localDtos.map((localDto) => (
              <tr key={localDto.id}>
                <td>{localDto.id}</td>
                <td>{localDto.street}</td>
                <td>{localDto.number}</td>
                <td>{localDto.city}</td>
                <td>{localDto.uf}</td>
              
              </tr>
            
          ))}
        </tbody>

      </table>
    );
  }
}

export default LocalTable;