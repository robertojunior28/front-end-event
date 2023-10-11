import React from "react";
import "bootswatch/dist/flatly/bootstrap.css";
import "../../App.css";

import { withRouter } from "react-router-dom";
import Card from "../../components/Card";
import FormGroup from "../../components/FormGroup";
import {
  showSuccessMessage,
  showErrorMessage,
  showWarningMessage,
} from "../../components/Toastr";
import LocalApiService from "../../services/LocalApiService";

class UpdateLocal extends React.Component {
  state = {
    id: 0,
    street: "",
    number: "",
    city: "",
    uf: "",
    dataLoaded: false,
  };
  constructor() {
    super();
    this.service = new LocalApiService();
  }

  componentDidMount(){
    const params = this.props.match.params;
    const id = params.id;
    this.findById(id);
}

  update = async () => {
    const errors = this.validate();

    if (errors.length > 0) {
      errors.forEach((message, index) => {
        showErrorMessage(message);
      });
      return false;
    }

    const localDto = {
      street: this.state.street,
      number: this.state.number,
      city: this.state.city,
      uf: this.state.uf,
    };

    await this.service
      .update(this.state.id, localDto, {
        "Content-Type": "application/json",
      })
      .then((response) => {
        console.log("Local atualizado com sucesso:", response.data);

        this.props.history.push('/viewLocals?updateSuccess=true');
        window.location.reload();
      })
      .catch((error) => {
        console.error("Erro ao atualizar o local:", error);
        showErrorMessage("Erro ao atualizar o local");
      });
  };

  cancel = () => {
    this.props.history.push("/");
    window.location.reload();
  };

  findById = (localId) => {
    this.service.get(`/${localId}`)
      .then(response => {
        const local = response.data;
  
        const { id, street, number, city, uf } = local;
  
        this.setState({ id, street, number, city, uf });
  
        console.log(local); // Adicione este console.log
      })
      .catch(error => {
        console.log(error.response);
      });
  }
  


  validate = () => {
    const errors = [];

    if (!this.state.id) {
      errors.push("Campo id é obrigatório!");
    }
    if (!this.state.street) {
      errors.push("Campo rua é obrigatório!");
    }

    if (!this.state.number) {
      errors.push("Campo número é obrigatório!");
    }
    if (!this.state.city) {
      errors.push("Campo cidade é obrigatório!");
    }

    if (!this.state.uf) {
      errors.push("Campo UF é obrigatório!");
    }

    return errors;
  };


  
  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <Card title="Atualizar Local">
          <div className="row">
            <div className="col-lg-12">
              <div className="bs-component">
              <FormGroup label="Id: *" htmlFor="inputId">
                  <input
                    type="text"
                    id="inputId"
                    className="form-control"
                    name="id"
                    value={this.state.id}
                    onChange={(e) => this.setState({ id: e.target.value })}
                    disabled
                  />
                </FormGroup>
                <FormGroup label="Rua: *" htmlFor="inputStreet">
                  <input
                    type="text"
                    id="inputStreet"
                    className="form-control"
                    name="street"
                    value={this.state.street}
                    onChange={(e) => this.setState({ street: e.target.value })}
                  />
                </FormGroup>
                <FormGroup label="Número: *" htmlFor="inputNumber">
                  <input
                    type="text"
                    id="inputNumber"
                    className="form-control"
                    name="number"
                    value={this.state.number}
                    onChange={(e) => this.setState({ number: e.target.value })}
                  />
                </FormGroup>
                <FormGroup label="Cidade: *" htmlFor="inputCity">
                  <input
                    type="text"
                    id="inputCity"
                    className="form-control"
                    name="city"
                    value={this.state.city}
                    onChange={(e) => this.setState({ city: e.target.value })}
                  />
                </FormGroup>
                <FormGroup label="UF: *" htmlFor="inputUf">
                  <input
                    type="text"
                    id="inputUf"
                    className="form-control"
                    name="uf"
                    value={this.state.uf}
                    onChange={(e) => this.setState({ uf: e.target.value })}
                  />
                </FormGroup>
                <button
                  onClick={this.update}
                  type="button"
                  className="btn btn-success"
                >
                  <i className="pi pi-save"></i> Atualizar
                </button>
                <button
                  onClick={this.cancel}
                  type="button"
                  className="btn btn-danger"
                >
                  <i className="pi pi-times"></i> Cancelar
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
export default withRouter(UpdateLocal);
