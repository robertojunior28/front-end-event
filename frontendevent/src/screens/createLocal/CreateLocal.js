import React from "react";
import "bootswatch/dist/flatly/bootstrap.css";
import "../../App.css";

import LocalApiService from "../../services/LocalApiService";

import { withRouter } from "react-router-dom";
import Card from "../../components/Card";
import FormGroup from "../../components/FormGroup";
import {
  showSuccessMessage,
  showErrorMessage,
  showWarningMessage,
} from "../../components/Toastr";

class CreateLocal extends React.Component {
  state = {
    street: "",
    number: "",
    city: "",
    uf: "",
  };

  constructor() {
    super();
    this.service = new LocalApiService();
  }

  create = async () => {
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
      .create(localDto, {
        "Content-Type": "application/json",
      })
      .then((response) => {
        console.log("Local criado com sucesso:", response.data);
        showSuccessMessage("Local criado com sucesso");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Erro ao criar local:", error);
        showErrorMessage("Erro ao criar local");
      });
  };

  validate = () => {
    const errors = [];

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

  cancel = () => {
    this.props.history.push("/");
    window.location.reload();
  };

  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <Card title="Cadastro de Local">
          <div className="row">
            <div className="col-lg-12">
              <div className="bs-component">
                <FormGroup label="Rua: *" htmlFor="inputStreet">
                  <input
                    type="text"
                    id="inputStreet"
                    className="form-control"
                    name="street"
                    onChange={(e) => this.setState({ street: e.target.value })}
                  />
                </FormGroup>
                <FormGroup label="Número: *" htmlFor="inputNumber">
                  <input
                    type="text"
                    id="inputNumber"
                    className="form-control"
                    name="number"
                    onChange={(e) => this.setState({ number: e.target.value })}
                  />
                </FormGroup>
                <FormGroup label="Cidade: *" htmlFor="inputCity">
                  <input
                    type="text"
                    id="inputCity"
                    className="form-control"
                    name="city"
                    onChange={(e) => this.setState({ city: e.target.value })}
                  />
                </FormGroup>
                <FormGroup label="UF: *" htmlFor="inputUf">
                  <input
                    type="text"
                    id="inputUf"
                    className="form-control"
                    name="uf"
                    onChange={(e) => this.setState({ uf: e.target.value })}
                  />
                </FormGroup>
                <button
                  onClick={this.create}
                  type="button"
                  className="btn btn-success"
                >
                  <i className="pi pi-save"></i> Salvar
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
export default withRouter(CreateLocal);
