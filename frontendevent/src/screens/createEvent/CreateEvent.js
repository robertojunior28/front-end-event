import React from "react";
import 'bootswatch/dist/flatly/bootstrap.css';
import "../../App.css";

import axios from 'axios';

import { withRouter } from 'react-router-dom';
import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';


class CreateEvent extends React.Component {
  state = {
    title: "",
    description: "",
    date: "",
    time: "",
    street: "",
    number: "",
    city: "",
    uf: ""
  }

  create = () => {
    const eventDto = {
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
      time: this.state.time,
      locals: [
        {
            street: this.state.street,
            number: this.state.number,
            city: this.state.city,
            uf: this.state.uf
        }
      ]
      
    };


    axios.post('http://localhost:8080/event', eventDto, {
      'Content-Type': 'application/json',
    })
    .then(response => {
      console.log('Evento criado com sucesso:', response.data);
      alert('Evento criado com sucesso');
      window.location.reload();
    })
    .catch(error => {
      console.error('Erro ao criar evento:', error);
      alert('Erro ao criar evento');
    });
    
  };
    

  cancel = () => {
    this.props.history.push('/'); 
    window.location.reload();
  };

  render(){
        return (
            <div className='container'>
                <br/><br/><br/><br/>
                <Card title="Cadastro de Evento">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <FormGroup label="Título: *" htmlFor="inputTitle">
                                    <input type="text" 
                                        id="inputTitle" 
                                        className="form-control"
                                        name="title"
                                        onChange={e => this.setState({title: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="Descrição: *" htmlFor="inputDescription">
                                    <input type="text" 
                                        id="inputDescription"
                                        className="form-control"
                                        name="description"
                                        onChange={e => this.setState({description: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="Data: *" htmlFor="inputDate">
                                    <input type="text" 
                                        id="inputDate"
                                        className="form-control"
                                        name="date"
                                        onChange={e => this.setState({date: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="Hora: *" htmlFor="inputTime">
                                    <input type="text" 
                                        id="inputTime"
                                        className="form-control"
                                        name="time"
                                        onChange={e => this.setState({time: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="Rua: *" htmlFor="inputStreet">
                                    <input type="text" 
                                        id="inputStreet" 
                                        className="form-control"
                                        name="street"
                                        onChange={e => this.setState({street: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="Número: *" htmlFor="inputNumber">
                                    <input type="text" 
                                        id="inputNumber"
                                        className="form-control"
                                        name="number"
                                        onChange={e => this.setState({number: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="Cidade: *" htmlFor="inputCity">
                                    <input type="text" 
                                        id="inputCity"
                                        className="form-control"
                                        name="city"
                                        onChange={e => this.setState({city: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="UF: *" htmlFor="inputUf">
                                    <input type="text" 
                                        id="inputUf"
                                        className="form-control"
                                        name="uf"
                                        onChange={e => this.setState({uf: e.target.value})} />
                                </FormGroup>
                                <button onClick={this.create} type="button" className="btn btn-success">
                                    <i className="pi pi-save"></i> Salvar
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
export default withRouter(CreateEvent);