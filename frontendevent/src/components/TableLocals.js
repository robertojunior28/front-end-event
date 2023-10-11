import React from 'react'

export default props => {

    const rows = Array.isArray(props.locals) ? props.locals.map(local => {
        return (
            <tr key={local.id}>
                <td>{local.id}</td>
                <td>{local.street}</td>
                <td>{local.number}</td>
                <td>{local.city}</td>
                <td>{local.uf}</td>
                <td>
                    <button type="button" title="Editar"
                            className="btn btn-primary"
                            onClick={e => props.edit(local.id)}>
                            <i className="pi pi-pencil"></i>
                    </button>
                    <button type="button" title="Excluir"
                            className="btn btn-danger" 
                            onClick={e => props.delete(local.id)}>
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
                    <th scope="col">Rua</th>
                    <th scope="col">Número</th>
                    <th scope="col">Cidade</th>
                    <th scope="col">UF</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}