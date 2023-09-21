import React from 'react';

class EventTable extends React.Component {
  render() {
    const {eventDtos} = this.props;

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Título</th>
            <th>Descrição</th>
            <th>Data</th>
            <th>Hora</th>
          </tr>
        </thead>
        <tbody>
          {eventDtos.map((eventDto) => (
              <tr key={eventDto.id}>
                <td>{eventDto.id}</td>
                <td>{eventDto.title}</td>
                <td>{eventDto.description}</td>
                <td>{eventDto.date}</td>
                <td>{eventDto.time}</td>
              
              </tr>
            
          ))}
        </tbody>

      </table>
    );
  }
}

export default EventTable;


