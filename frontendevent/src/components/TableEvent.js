import React from 'react'

export default props => {

    const rows = Array.isArray(props.events) ? props.events.map(event => {
        return (
            <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.title}</td>
                <td>{event.description}</td>
                <td>{event.date}</td>
                <td>{event.time}</td>
                <td>
                    <button type="button" title="Editar"
                            className="btn btn-primary"
                            onClick={e => props.edit(event.id)}>
                            <i className="pi pi-pencil"></i>
                    </button>
                    <button type="button" title="Excluir"
                            className="btn btn-danger" 
                            onClick={e => props.delete(event.id)}>
                            <i className="pi pi-trash"></i>
                    </button>
                </td>
            </tr>
        )
    }) : null;

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Título</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Data</th>
                    <th scope="col">Hora</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}