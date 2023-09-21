import React from "react";
import 'bootswatch/dist/flatly/bootstrap.css';
import "../../App.css";

import axios from 'axios';

import { withRouter } from 'react-router-dom';
import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';


class DeleteLocal extends React.Component {
    delete = () => {
        const localDto = {
          id: 0
        };
    
    
        axios.delete(`http://localhost:8080/local/${this.state.id}`, localDto, {
          'Content-Type': 'application/json',
        })
        .then(response => {
          console.log('Local deletado com sucesso:', response.data);
          alert('local deletado com sucesso');
          window.location.reload();
        })
        .catch(error => {
          console.error('Erro ao deletar o local:', error);
          alert('Erro ao deletar o local');
        });
        
      };

      cancel = () => {
        this.props.history.push('/');
        window.location.reload();
    }

    render(){
        return (
            <div className='container'>
                <br/><br/><br/><br/>
                <Card title="Remover de Local">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <FormGroup label="Id: *" htmlFor="inputId">
                                    <input type="text" 
                                        id="inputId" 
                                        className="form-control"
                                        name="name"
                                        onChange={e => this.setState({id: e.target.value})} />
                                </FormGroup>
                                <button onClick={this.delete} type="button" className="btn btn-success">
                                    <i className="pi pi-save"></i> Deletar
                                </button>
                                <button onClick={this.cancel} type="button" className="btn btn-danger">
                                    <i className="pi pi-times"></i> Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}
export default withRouter(DeleteLocal);